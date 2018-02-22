import { Component } from '@angular/core';

import { Requisition } from '../requisition';
import { REQUISITIONLIST } from '../requisitionList';
import { OrderrByPipe } from '../OrderBy.pipe';
import { PagerService } from '../services/index'; 

@Component({
  selector: 'body-component',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  requisitionList = REQUISITIONLIST;
  selectItem = "Johnny Appleseed";
  myReq = true;
  allReq = false;
  isDesc = false;
  column = "";
  pager: any = {};
  direction: number;
  pagedItems: Requisition[];

  constructor(private pagerService: PagerService) { }

  ngOnInit() {
    this.setPage(1);
  }

  setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }

      // get pager object from service
      this.pager = this.pagerService.getPager(this.requisitionList.length, page);

      // get current page of items
      this.pagedItems = this.requisitionList.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  sort(property){
      this.isDesc = !this.isDesc; //change the direction    
      this.column = property;
      this.direction = this.isDesc ? 1 : -1;
  }

  setReq(param) {
  	if(param == 'myReq') {
  		this.myReq = true;
  		this.allReq = false;
  		this.selectItem = "Johnny Appleseed";
  	} 
  	else {
  		this.myReq = false;
  		this.allReq = true;
  		this.selectItem = "";
  	}
  }

}
