import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { JsonserverService } from '../form/jsonserver.service';
import { AmulComponent } from '../amul/amul.component';
declare let $: any;
import { Options,LabelType } from '@angular-slider/ngx-slider';
import * as moment from 'moment';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private service:JsonserverService) { }
  // value: number = 0;
  // highValue: number = 20;
  // options: Options = {
  //   floor: 0,
  //   ceil: 10000
  // };
 
  ngOnInit(): void {
    var $filters = $("input:checkbox[name='brand']").prop('checked', true), // start all checked
    $categoryContent = $('#CategoryContent div'),
    $errorMessage = $('#errorMessage');

$filters.click(function () {
    // if any of the checkboxes for brand are checked, you want to show div's containing their value, and you want to hide all the rest.
    $categoryContent.hide();
    var $selectedFilters = $filters.filter(':checked');
    if ($selectedFilters.length > 0) {
        $errorMessage.hide();
        $selectedFilters.each(function (i:any, el:any) {
            $categoryContent.filter(':contains(' + el.value + ')').show();
        });
    } else {
        $errorMessage.show();
    }

});
  }


@ViewChild(AmulComponent) childview:AmulComponent
private childmethod:AmulComponent
@ViewChild('foo', {static: false}) foo: ElementRef;

accessthechildmilk(event:any) {
  this.childview.method(event.target.value)
}

  candidate:any
  candidateDummy:any
  getrecords(){
    this.service.getData().subscribe((data:any)=>{
      this.candidate=data
    })
  }
  searchKey:any
  search():any {
     let tempdata = [...this.candidate]
     this.candidateDummy = tempdata.filter((data: any) => {
       return data.brandName.toLowerCase().includes(this.searchKey.toLowerCase())
         ||
         data.productName.toLowerCase().includes(this.searchKey.toLowerCase())
         ||
         data.description.toLowerCase().includes(this.searchKey.toLowerCase())
        
     })
   }
   minimumvalues:any;
   handleSlideChange(event:any){
  this.minimumvalues=event;
   }
   buttonclick(){
    let pricevalues=[...this.candidate]
    pricevalues=this.candidateDummy.filter((data:any)=>{
      return data.price >= this.minimumvalues
    })
    this.candidateDummy=pricevalues
       }
    

 
// filter(){
//   let tempdata = [...this.candidate]
// this.candidateDummy=tempdata.filter((data:any)=>{
//   return data.productName
// })
// }
 valuesforchild:any

changes:any
method(event:any){
  console.log(event.target.value);
this.changes=event.target.value
  let values=[...this.candidate]
  values=this.candidate.filter((Data:any)=>{
    return  Data.productName === 'Milk'
  })
  this.candidateDummy=values

}

// minValue: number = 0;
// maxValue: number = 10000;
//   value: number = 0;
//   highValue: number = 20;
// options: Options = {
//   floor: 0,
//   ceil: 10000,
//   translate: (value: number, label: LabelType): string => {
//     switch (label) {
//       case LabelType.Low:
//         return "<b>Min price:</b> Rs" + value;
//       case LabelType.High:
//         return "<b>Max price:</b> Rs" + value;
//       default:
//         return "Rs" + value;
//     }
//   }
// };

SElectTheDate:any=[];
changedFilterDate(){
  console.log(this.SElectTheDate);
let firstSelectedDate=this.SElectTheDate[0]
let firstSElectedDateConverted=moment(firstSelectedDate)
console.log(firstSelectedDate);
let secondSelectedDate=this.SElectTheDate[1]
// let secondSelectedDateconvert=moment(secondSelectedDate).format('yyy-MM-DD')
console.log(secondSelectedDate);
let valuesforFilter=[...this.candidate]
valuesforFilter=this.candidate.filter((data:any)=>{
return new Date(data.bookingDetailsList.dayOfOrganization) >= firstSelectedDate
&&
new Date(data.bookingDetailsList.dayOfOrganization) <= secondSelectedDate
})
this.candidateDummy=valuesforFilter
}
sliderValue: number = 0; 

}
