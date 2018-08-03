import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { KbeTableDataSource } from './kbe-table-datasource';

@Component({
  selector: 'kbe-table',
  templateUrl: './kbe-table.component.html',
  styleUrls: ['./kbe-table.component.css']
})
export class KbeTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: KbeTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'scope', 'description'];

  constructor(){
    //this.dataSource = new KbeTableDataSource(this.paginator, this.sort, this.dataSourceName);
  } 
  ngOnInit() {
    this.dataSource = new KbeTableDataSource(this.paginator, this.sort);
  }
}
