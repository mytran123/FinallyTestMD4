import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Awesome} from "../Awesome";
import {AwesomeService} from "../../../services/awesome.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-awesome-create',
  templateUrl: './awesome-create.component.html',
  styleUrls: ['./awesome-create.component.css']
})
export class AwesomeCreateComponent implements OnInit {
  awesome : Awesome[] = [];
  createForm?: FormGroup

  constructor(private fb: FormBuilder,
              private awesomeService: AwesomeService,
              private router: Router) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      tag: [''],
      url: [''],
      descriptions: ['']
    })
  }

  create() {
    let data: any = this.createForm?.value
    let awesomeData: any = {
      tag: data.tag,
      url: data.url,
      descriptions: data.descriptions
    }
    this.awesomeService.create(awesomeData).subscribe(res => {
      this.awesome.push(res)
      this.router.navigate([""])
    })
  }

}
