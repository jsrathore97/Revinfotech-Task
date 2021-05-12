import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.css']
})
export class TableExampleComponent implements OnInit {
  display = "none";
  p: number = 1;
  constructor(private commonservid : CommonServiceService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getCityData('DELHI')
  }

  cityName:any="DELHI";


  allCityData:any;
  showTable=false;
  getCityData(cityName:any){
    this.spinner.show();
        this.commonservid.getAllData(cityName).subscribe((result:any)=>{
          this.showTable = true;
          this.allCityData = result;
          console.log(this.allCityData);
          this.spinner.hide();
        })
    

  }

  bankId:any;
  bankAdd:any;
  bank_name:any;
  branch:any;
  city:any;
  district:any;
  ifsc:any;
  state:any;
  openModal(value:any) {
    this.display = "block";
    this.bankId = value.bank_id;
    this.bank_name = value.bank_name;
    this.branch = value.branch;
    this.city = value.city;
    this.district = value.district;
    this.ifsc = value.ifsc;
    this.state = value.state;

    this.bankAdd = value.address;
    
  }
  onCloseHandled() {
    this.display = "none";
  }
}
