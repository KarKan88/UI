import { Component, OnInit, Input , Output, EventEmitter, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Backend } from '../core/services/services'
import { MatPaginator } from '@angular/material';
import { ResponsiveTableHelpers } from './helpers.data';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  providers :[Backend]
})
export class HistoryComponent implements OnInit {

    @Input() iconOnly:boolean = false;
   
    displayedColumns = ['orderNo', 'Iten name', ' Quantity', 'Order time', 'status'];
    rows: Array<any> = [];
      showResponsiveTableCode;
    data: Array<any> = [];
    role: string;
    restrictMenu : boolean;
    @ViewChild(MatPaginator) paginator1: MatPaginator;
      pageLength = 0;
      pageSize = 3;
      helpers = ResponsiveTableHelpers;
      @Input() status;
      @Input() actionStatus;
      @Output() edit = new EventEmitter();
      @Output() delete = new EventEmitter();
      @Output() view = new EventEmitter();
      @Output() page = new EventEmitter();
      @Output() sort = new EventEmitter();
      @Output() dup = new EventEmitter();
      constructor( private api: Backend,private route: ActivatedRoute) { 
        this.restrictMenu = false;
        this.route.queryParams.subscribe((params)=>{
          this.role = params.role;
          if(this.role === '1'){
            this.restrictMenu = true;
          }
          console.log(params)
        });
       // console.log('this.param'+this.param);
      }

      ngOnInit() {
        this.api.storeUrl('test');
        console.log(this.api.getUrl());
        this.api.getCall('getOrder/fromStatus?userId=12&status=pending').subscribe(res => {
         console.log('res'+JSON.stringify(res));
         this.helpers.rows = [];//res;
         this.data = res;
         console.log(JSON.stringify(this.helpers));
         this.getRows();
        })
      }
      tabOperation = function($event){
        switch($event.index){
          case 0:
            this.viewOrder('pending');
          break;
          case 1:
            this.viewOrder('acknowledged');
          break;
          case 2:
            this.viewOrder('progress');
          break;
          case 3:
            this.viewOrder('checkout');
          break;
        }
      }
      changeStatus = function(orderno,userid,status){
        var url = 'update-order?orderNo='+orderno+'&userId=12&status='+status;
        this.api.postCall(url).subscribe(res=>{
          this.tabOperation(0);
          console.log('update success');
        })
      }    
      viewOrder = function(status){
        this.api.getCall('getOrder/fromStatus?userId=12&status='+status).subscribe(res => {
          console.log('res'+JSON.stringify(res));
          this.helpers.rows = [];
          this.data = res;
          console.log(JSON.stringify(this.helpers));
          this.getRows();
         })
      }
     
      next(event) {
          this.rows = [];
        for (var i= 1 * event.pageIndex * event.pageSize; i< event.pageSize+event.pageIndex*event.pageSize ;i++) {
              this.rows = [...this.rows,this.helpers.rows[i]];
          }
      }
      getRows() {
          for (var i=0;i<this.pageSize;i++) {
              this.rows = [...this.rows,this.helpers.rows[i]];
          }
          this.pageLength = this.helpers.rows.length;
      }
      sortData(val){
      }
   

}
