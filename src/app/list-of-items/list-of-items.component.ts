import {Component, ViewChild} from '@angular/core';
import { MatSort, MatTableDataSource} from '@angular/material';
import { Http } from '@angular/http';
import { PeriodicElement, JsonItems } from '../common/models';
import { ELEMENT_DATA } from '../common/mockData';
import parseFunc from '../common/parse'

@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.scss'],
})
export class ListOfItemsComponent {

  jsonItems: Array<JsonItems>;
  displayedColumns: string[] = ['name', 'description', 'triggerName', 'interimTriggerName', 'effectiveDeadlineIntro', 'empty'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  tableItems: Array<PeriodicElement>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: Http) {
    this.getJSON().subscribe(data => {
      this.dataSource = new MatTableDataSource(parseFunc(data, this.tableItems));
      this.dataSource.sort = this.sort;
    }, error => console.log(error));
  }

  getJSON(): any {
    return this.http.get('../../assets/response.json');
  }

  popView = (event) => {
    const whatComes: string = event.target.innerHTML;

    alert(`We got ${whatComes} coming!`);
  }
}
