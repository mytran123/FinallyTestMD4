import { Component, OnInit } from '@angular/core';
import {Awesome} from "../Awesome";
import {AwesomeService} from "../../../services/awesome.service";



@Component({
  selector: 'app-awesome-list',
  templateUrl: './awesome-list.component.html',
  styleUrls: ['./awesome-list.component.css']
})
export class AwesomeListComponent implements OnInit {

  awesomes: Awesome[] = []

  constructor(private awesomeService: AwesomeService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.awesomeService.getAll().subscribe(res => {
      this.awesomes = res;
    })
  }

  delete(i: any) {
    const awesome = this.awesomes[i]
    if (confirm('Are you sure?')) {
      this.awesomeService.delete(awesome.id).subscribe(res => {
        this.awesomes = this.awesomes.filter(
          n=>n.id !==awesome.id
        )
      })
    }

  }

}
