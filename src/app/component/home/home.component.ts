import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FillFormComponent } from '../campus/fill-form/fill-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _dialog: MatDialog) { }

  openCreateFillForm(){
    this._dialog.open(FillFormComponent)
  }

  ngOnInit(): void {
  }

}
