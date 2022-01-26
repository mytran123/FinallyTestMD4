import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-awesome-update',
  templateUrl: './awesome-update.component.html',
  styleUrls: ['./awesome-update.component.css']
})
export class AwesomeUpdateComponent implements OnInit {

  updateForm: FormGroup | any
  id: any

  // constructor(private fb: FormBuilder,
  //             private activatedRoute: ActivatedRoute,
  //             private ) { }

  ngOnInit(): void {
  }

}
