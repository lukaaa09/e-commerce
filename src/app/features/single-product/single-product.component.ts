import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IComment } from 'src/app/core/interfaces/comments-interface';
import { IloggedUser } from 'src/app/core/interfaces/logged-user-interface';
import { CommentsService } from 'src/app/core/services/comments.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { RegisterService } from 'src/app/core/services/register.service';
import { IProducts } from '../../core/interfaces/protucts-interface'

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  @Input() currentUserId!: string
  commentsBody!: IComment[]
  currentProductName!: string | null
  displayBtn: boolean = false
  currentProduct: BehaviorSubject<IProducts> = new BehaviorSubject<IProducts>({} as IProducts)
  activeComment!: IComment
  loggedUser: IloggedUser

  constructor(private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private commentsService: CommentsService,
    private registerService: RegisterService) {
    this.loggedUser = JSON.parse(localStorage?.getItem('user')!)
  }

  ngOnInit(): void {
    this.currentProductName = this.activatedRoute.snapshot.paramMap.get('id')
    this.singleProduct()
    this.getComments()
  }


  public singleProduct() {
    this.productService.getSingleProduct(this.currentProductName).pipe(
      tap((data: IProducts) => {
        this.currentProduct.next(data)
      })
    ).subscribe()
  }
  public getComments() {
    this.commentsService.getComments().pipe(
      tap((comment) => {
        this.commentsBody = comment
      })
    ).subscribe()
  }

  public addComment({ text, parentId, id }: { text: string, parentId: string | null, id: number }) {
    this.commentsService.postComment(text, parentId).pipe(
      tap((createdComments) => {
        this.commentsBody = [... this.commentsBody, createdComments]
      })
    ).subscribe()
  }
  deleteComment(id: number) {
    this.commentsService.deleteComment(id).subscribe(() => {
      this.commentsBody = this.commentsBody.filter((v) => v.id != id)
    })
  }
  public updateComments(id: number, text: string): void {
    const commentToUpdate: IComment = {
      ...this.activeComment, body: text
    }
    this.commentsService.updateComments(id, commentToUpdate).pipe(
      tap((comments: any) => {
        this.commentsBody = this.commentsBody.map((updatedComment: IComment) => {
          if (updatedComment.id === comments.id) {
            return comments
          }
          return updatedComment
        })
      })
    ).subscribe()
  }
  editUser(comment: IComment) {
    this.activeComment = comment
    console.log(this.activeComment)
    this.displayBtn = true
  }
  public submit({ text, parentId, id }: { text: string, parentId: string | null, id: number }) {
    if (id) {
      this.updateComments(id, text)
    } else {
      this.addComment({ text, parentId, id })
    }
  }
}
