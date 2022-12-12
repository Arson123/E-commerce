import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  user: FormGroup | any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.user = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      isMilitar: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      typeDoc: ['', Validators.required],
      document: ['', Validators.required],
    });
  }

  onSubmit(data: any) {
    
    if (this.user.valid) {
      console.log(data);
    }
  }

  nameCh(){
    console.log(this.user.controls['name'].invalid);
    
    console.log(this.user.controls.name);
  }
}
