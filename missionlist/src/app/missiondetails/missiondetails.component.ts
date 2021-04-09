import { Component, OnInit,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-missiondetail',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissionComponent implements OnInit ,OnChanges{
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {

  }

}





