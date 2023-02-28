import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html',
  styleUrls: ['./fill-form.component.scss']
})
export class FillFormComponent implements OnInit {

  fillForm!: FormGroup;

  constructor(private _fb: FormBuilder) {

    // this.fillForm = this._fb.group ({

    //   startDate: [''],
    //   endDate: [''],
    //   title: [''],
    //   type_beneficiary: ['sectors', 'clientele'],
    //   count_male: [''],
    //   count_female: [''],
    //   mean1: [''],
    //   mean2: [''],
    //   mean3: [''],
    //   mean4: [''],
    //   mean5: [''],
    //   durationtype: [''],
    //   duration: [''],
    //   serviceOpt: ['training', 'outreach', 'consultancy', 'gad'],
    //   partners: [''],
    //   role: ['']
    // })

   }
  
  ngOnInit(): void {
    this.fillForm = this._fb.group ({

      'startDate': new FormControl(null),
      'endDate': new FormControl(null),
      'title': new FormControl(null),
      'type_beneficiary': new FormControl(['sectors', 'clientele']),
      'count_male': new FormControl(null),
      'count_female': new FormControl(null),
      'mean1': new FormControl(null),
      'mean2': new FormControl(null),
      'mean3': new FormControl(null),
      'mean4': new FormControl(null),
      'mean5': new FormControl(null),
      'durationtype': new FormControl(null),
      'duration': new FormControl(null),
      'serviceOpt': new FormControl(['training', 'outreach', 'consultancy', 'gad']),
      'partners': new FormControl(null),
      'role': new FormControl(null),
      'cost_fund': new FormControl(null)
    })
  }

  addReport() {
    console.log(this.fillForm.value);
  }

}
