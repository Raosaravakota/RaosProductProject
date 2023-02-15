import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { personInfo } from 'src/assets/data/personsInfo';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personsinfo',
  templateUrl: './personsinfo.component.html',
  styleUrls: ['./personsinfo.component.scss']
})
export class PersonsinfoComponent implements OnInit ,AfterViewInit{
  personData:any;
  loaddata!: any;
  displayedColumns: string[] = ['PersonID', 'PersonName', 'PersonDOB', 'PersonGender','PersonAddress','PersonSalary'];
  dataSource = new MatTableDataSource<personInfo>(this.loaddata);
  private URL = '../assets/data/PersonData.json';


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(this.URL).subscribe(data => {
      this.loaddata=data;
     });
  }
ngAfterViewInit(){
  this.dataSource.paginator = this.paginator;
}





}
