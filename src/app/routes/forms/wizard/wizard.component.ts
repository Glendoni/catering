import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class WizardComponent implements OnInit {
  
signupForm: FormGroup;
    currentStep = 1;
    steps: Array<number> = [1, 2, 3, 4];
    
    isOn = true;

    constructor(pt: PagetitleService, private fb: FormBuilder) {
        
        
     
        
        pt.setTitle('Form Wizard');
             this.signupForm = this.fb.group({
   userName: ['', Validators.required ],
       password: '',
      confirm: '',
      name: ['', Validators.required ],
      surname: '',
      email: '',
      address: '',
     terms: ''
  });
    }

    ngOnInit() {
        
        
        
    }

    
    entryrequired(){
        
        return true;
    }
    
    stepNext() {
        if (!this.isLastStep())
           this.currentStep++;
    }

    stepPrev() {
        if (!this.isFirstStep() ){
            this.currentStep--;
            this.isOn = false;
        }
    }

    stepActive(stepNo: number) {
        
        if (this.currentStep >1)   {
            this.isOn = false;
        }else{
           this.isOn = true;
        }
        return this.currentStep === stepNo;
    }

    isFirstStep() {
      
        return this.currentStep === Math.min(...this.steps);
    }

    isLastStep() {
        
        return this.currentStep === Math.max(...this.steps);
     
    }

onSubmit($ev, form: FormGroup) {
        $ev.preventDefault();
        let value = form.value;
        for (let c in form.controls) {
            form.controls[c].markAsTouched();
        }
        if (form.valid) {
            console.log('Valid!');
              console.log(this.signupForm.value);
        }
    this.getFormValidationErrors()
       //  console.log(value);
    }

getFormValidationErrors() {
  Object.keys(this.signupForm.controls).forEach(key => {

  const controlErrors: ValidationErrors = this.signupForm.get(key).errors;
      
  if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
            
           
        });
      
      }
    });
  }
}
/*

address: string;
confirm: string;
email: string;
name: string;
password: string;
surname: string;
terms: number:
userName: string;

*/