import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { JsonserverService } from '../form/jsonserver.service';
import { AmulComponent } from '../amul/amul.component';
declare let $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private service:JsonserverService) { }

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
}
