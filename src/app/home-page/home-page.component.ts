import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { timeSheet } from '../models/timeSheet-model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public datasForm: FormGroup;
  public timeSheet: timeSheet;
  public timeSheetCtrl;

  constructor(private formBuilder: FormBuilder) {
    this.timeSheetCtrl = {} as FormBuilder;

    

    this.datasForm = this.formBuilder.group({
      arrivingTime: this.timeSheetCtrl.arrivingTime,
      departureTime: this.timeSheetCtrl.departureTime,
      familly: this.timeSheetCtrl.familly,
      note: this.timeSheetCtrl.note,
      signature: this.timeSheetCtrl.signature
    });
  }

  ngOnInit() {
  }

}
