import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IComments } from 'src/app/core/interfaces/comments-interface';
import { CommentsService } from 'src/app/core/services/comments.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { IProducts } from '../../core/interfaces/protucts-interface'

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  @Input() currentUserId!: string
  commentsBody: any
  currentProductName: any
  displayBtn: boolean = false
  currentProduct: BehaviorSubject<IProducts> = new BehaviorSubject<IProducts>({} as IProducts)
  activeComment: any

  constructor(private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private commentsService: CommentsService) { }

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

  public addComment({ text, parentId, id}: { text: string, parentId: string | null, id: any }) {
    console.log(id)
    this.commentsService.postComment(text, parentId).pipe(
      tap((createdComments) => {
        this.commentsBody = [... this.commentsBody, createdComments]
      })
    ).subscribe()
  }
  deleteComment(id: any) {
    this.commentsService.deleteComment(id).subscribe(() => {
      this.commentsBody = this.commentsBody.filter((v: any) => v.id != id)
    })
  }
  updateComments() {
    this.commentsService.updateComments(this.activeComment.id, this.commentsBody).pipe(
      tap((comments) => {
       console.log(comments)
      })
    ).subscribe()
  }

  editUser(comment: any) {
    this.activeComment = comment
    console.log(this.activeComment.id)
  }

}
