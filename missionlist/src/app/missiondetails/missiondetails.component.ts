import { Component, OnInit,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit ,OnChanges{
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
   
  }

}
