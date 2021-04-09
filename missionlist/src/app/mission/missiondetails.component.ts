import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
})
export class MissiondetailsComponent implements OnInit {
  spaceName = [
    'FalconSat',
    'DemoSat',
    'Trailblazer',
    'RatSat',
    'RazakSat',
    'Falcon 9 Test Flight',
    'COTS 1',
    'COTS 2',
    'CRS-1',
    'CRS-1',
    'CASSIOPE',
    'SES-8',
    'Thaicom 6',
    'OG-2 Mission 1',
    'AsiaSat 8',
    'AsiaSat 6',
    'AsiaSat 8',
    'CRS-4',
    'CRS-5',
    'DSCOVR',
    'ABS-3A / Eutelsat 115W B',
    'TürkmenÄlem 52°E / MonacoSAT',
    'Starlink-10 (v1.0) & SkySat 19-21',
    'Iridium NEXT Mission 8',
  ];
  launchDataArray = [];
  isLoading = false;

  showFilter = false;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getAllLaunches();
  }

  getAllLaunches(): any {
    this.isLoading = true;
    this.appService.getAllLaunches().subscribe(
      (response: any) => {
        // console.log(response);
        this.launchDataArray = response;
        this.isLoading = false;
      },
      (err) => {
        console.log(err);
        this.isLoading = false;
      }
    );
  }

  filterLaunchPrograms(index: number, name: string): any {
    this.getFilteredLaunches(name);
    this.showFilter = true;
  }

  getFilteredLaunches(name: string): any {
    this.appService.getLaunchesByYear(name).subscribe(
      (response: any) => {
        this.launchDataArray = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  clearFilter(): void {
    this.getAllLaunches();

    this.showFilter = false;
  }
}
