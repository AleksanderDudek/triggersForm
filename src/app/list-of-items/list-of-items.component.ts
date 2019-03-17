import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { Http } from '@angular/http';




export interface PeriodicElement {
  name: number;
  description: string;
  triggerName: number;
  interimTriggerName: string;
  effectiveDeadlineInfo: string;
}

export interface JsonItems  {
  id: number;
  name: string;
  status: string;
  modifyBy: string;
  modifyDate: string;
  description: string;
  triggerdateLbman: boolean;
  triggerdateSvcscat: string;
  triggerdateItem: boolean;
  isinterimtrigger: boolean;
  constraintLbman: boolean;
  constraintSvcscat: string;
  constraintItem: boolean;
  purma: boolean;
  nntm: boolean;
  pdbtm: boolean;
  dsart: boolean;
  trigger: number;
  interimtrigger: number;
  constraint: number;
  lbmanEffectivedeadlineinfo: number;
  lbmanProcbasisref: number;
  editable: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 1, description: 'Hydrogen', triggerName: 1.0079, interimTriggerName: 'H', effectiveDeadlineInfo: 'H'},
  {name: 2, description: 'Helium', triggerName: 4.0026, interimTriggerName: 'He', effectiveDeadlineInfo: 'H'},
  {name: 3, description: 'Lithium', triggerName: 6.941, interimTriggerName: 'Li', effectiveDeadlineInfo: 'H'},
  {name: 4, description: 'Beryllium', triggerName: 9.0122, interimTriggerName: 'Be', effectiveDeadlineInfo: 'H'},
  {name: 5, description: 'Boron', triggerName: 10.811, interimTriggerName: 'B', effectiveDeadlineInfo: 'H'},
  {name: 6, description: 'Carbon', triggerName: 12.0107, interimTriggerName: 'C', effectiveDeadlineInfo: 'H'},
  {name: 7, description: 'Nitrogen', triggerName: 14.0067, interimTriggerName: 'N', effectiveDeadlineInfo: 'H'},
  {name: 8, description: 'Oxygen', triggerName: 15.9994, interimTriggerName: 'O', effectiveDeadlineInfo: 'H'},
  {name: 9, description: 'Fluorine', triggerName: 18.9984, interimTriggerName: 'F', effectiveDeadlineInfo: 'H'},
  {name: 10, description: 'Neon', triggerName: 20.1797, interimTriggerName: 'Ne', effectiveDeadlineInfo: 'H'},
];


function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.scss'],
})
export class ListOfItemsComponent implements OnInit {

  items = [1, 2, 3, 4, 6, 7];
  jsonItems: Array<JsonItems>;
  displayedColumns: string[] = ['name', 'description', 'triggerName', 'interimTriggerName', 'effectiveDeadlineIntro', 'empty'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  tableItems: Array<PeriodicElement>;

  temp: any;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: Http) {
    this.getJSON().subscribe(data => {
      const temp = data.json();
      this.tableItems = temp.map(el => {
        const parsedEl = el as JsonItems;
        const holder = {
          name: parsedEl.name.toString(),
          description: parsedEl.description,
          triggerName: !!parsedEl.id && parsedEl.id.toString(),
          interimTriggerName: !!parsedEl.interimtrigger && parsedEl.interimtrigger.toString(),
          effectiveDeadlineInfo: !!parsedEl.lbmanEffectivedeadlineinfo && parsedEl.lbmanEffectivedeadlineinfo.toString(),
          empty : ''
        };
        return holder;
      });
      console.log(this.tableItems);
      this.dataSource = new MatTableDataSource(this.tableItems);
    },
      error => console.log(error));
  }

  getJSON(): any {
    return this.http.get('../../assets/response.json');
  }

  ngOnInit() {}

  popView = (event) => {
    const whatComes: string = event.target.innerHTML;

    alert(`We got ${whatComes} coming!`);
  }
}
