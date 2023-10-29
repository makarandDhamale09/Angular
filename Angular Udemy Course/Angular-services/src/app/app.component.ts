import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  NgModel,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
    });

    this.form = new FormGroup({
      fullName: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
      ]),
      address: new FormControl(null, Validators.required),
      skills: new FormArray([]),
    });
  }

  get fullname() {
    return this.form.get('fullName');
  }

  addSkills(skill: HTMLInputElement) {
    this.Skills.push(new FormControl(skill.value));
    skill.value = '';
  }

  get Skills() {
    return this.form.get('skills') as FormArray;
  }

  removeSkills(index: number) {
    this.Skills.removeAt(index);
  }

  onReactiveSubmit() {
    console.log(this.form.value);
  }

  getValueReactive() {
    console.log('Reactive Form Change : ', this.form);
  }

  onSubmitReactive() {
    console.log(this.form.value);
  }

  // This is used for Template driven form control
  onSubmit(f: NgForm) {
    console.log(f.value);
  }

  getValue(f: NgModel) {
    console.log(f);
  }
}
