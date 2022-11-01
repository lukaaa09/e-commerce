import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {
  @Input() submitLabel!: string
  @Input() cancelButton: boolean = false
  @Input() initialText: string = ''
  @Input() activeComment: any
  @Output() handleSubmit = new EventEmitter<any>()
  form: any

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    let change: SimpleChange = changes['activeComment'];
    console.log(change)
    if (!(<SimpleChange>change).firstChange && (change) && 
      (<SimpleChange>change).currentValue !== (<SimpleChange>change).previousValue) {
        console.log(this.form)
      this.form.get('tittle').setValue(this.activeComment.body)
    }

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      tittle: new FormControl(this.initialText, [Validators.required])
    })
  }
  public onSubmit() {
    this.handleSubmit.emit({text: this.form.value.tittle, id: this.activeComment.id})
    this.form.reset()
  }


}
