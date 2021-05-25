import { Component, OnInit, Output } from '@angular/core';
import { JsonserverService } from '../form/jsonserver.service';
import { Router } from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-amul',
  templateUrl: './amul.component.html',
  styleUrls: ['./amul.component.css']
})
export class AmulComponent implements OnInit {

  constructor(private service:JsonserverService,
    private router:Router
    ) { }

// images:any=[
//   "https://www.google.com/search?q=nature+images+hd&tbm=isch&source=iu&ictx=1&fir=dO_veDQjHYmzPM%252CJccXXczxe3mEEM%252C_&vet=1&usg=AI4_-kQtBf18lXwGvxR0N47s_83Mwz0c5Q&sa=X&ved=2ahUKEwjsg83W0t_wAhUUVH0KHQSiBs4Q9QF6BAgTEAE#imgrc=dO_veDQjHYmzPM",
//   "https://www.google.com/search?q=nature+images+hd&tbm=isch&source=iu&ictx=1&fir=fb2whHdYNM6PrM%252CLE-UrDM_SHrCpM%252C_&vet=1&usg=AI4_-kTs9Mk1Hf-Ap20e5oAoaO9q8piAww&sa=X&ved=2ahUKEwjsg83W0t_wAhUUVH0KHQSiBs4Q9QF6BAgSEAE#imgrc=fb2whHdYNM6PrM",
//   "https://www.google.com/search?q=nature+images+hd&tbm=isch&source=iu&ictx=1&fir=cmiysi_piO9m3M%252CBa_eiczVaD9-zM%252C_&vet=1&usg=AI4_-kRSL0nsYK0BvB3ZvJ_NdP_Uwj8BQg&sa=X&ved=2ahUKEwjsg83W0t_wAhUUVH0KHQSiBs4Q9QF6BAgREAE#imgrc=cmiysi_piO9m3M"
// ]


// "imagepath":"https://www.americanhumane.org/app/uploads/2017/06/Grizzly-JDL-1024x682.jpg",
      // "imagepath":"https://i.dietdoctor.com/wp-content/uploads/2018/10/Monkey-eating-a-banana.jpg?auto=compress%2Cformat&w=800&h=533&fit=crop",
      // "imagepath":"https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAxOS8zNDEvb3JpZ2luYWwvYWZyaWNhbi1saW9ucy5qcGc=",


images = [
  'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAxOS8zNDEvb3JpZ2luYWwvYWZyaWNhbi1saW9ucy5qcGc=',
  'https://i.dietdoctor.com/wp-content/uploads/2018/10/Monkey-eating-a-banana.jpg?auto=compress%2Cformat&w=800&h=533&fit=crop',
  'https://www.americanhumane.org/app/uploads/2017/06/Grizzly-JDL-1024x682.jpg',
  'https://reidparkzoo.org/wp-content/uploads/2013/03/elephants-april-2016-1-260x260.jpg',
  'https://www.tripsavvy.com/thmb/80kJ2ZT0IKXqJ0kpBdWCN5_0n0U=/3008x2000/filters:no_upscale():max_bytes(150000):strip_icc()/giant-pandas-enjoy-life-at-washington-zoo-526749690-597ccb350d327a0011729484.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF6dMeoGGYvFpmIs1Mupokb7NDde9x83pmgUCx2xb6AzCwF4Nf']

imageGroups:any
minimumdefaultvaluesfromthedatabase:any
basicminimum(event:any){
  this.minimumdefaultvaluesfromthedatabase=Math.min(event.target.value)
}
  ngOnInit(): void {
    var arr = [1,2,3];
var max = arr.reduce(function(a:any, b:any) {
    return Math.max(a, b);
});
console.log(max);

    this.getdetails();
    var $filters = 
    $("input:checkbox[name='brand']").prop('checked', false), // start all checked
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
this.imageGroups = this.images.reduce((p:any, c:any, i:any) => {
  if (i === 0 || i % 3 === 0) {
    p.push([c]);
  } else {
    p[p.length - 1].push(c);
  }
  return p;
}, []);
}
  
  candidate:any[];
candidateDummy:any
candidateBelowDetails:any
getdetails(){
  this.service.getData().subscribe((data:any)=>{
    this.candidate=data
    this.candidateDummy=data
  })
}




count=0

click(){
  this.count=this.count+1
}

max:any
minimum(event:any){
this.max=Math.min(event.target.value)
}

addToSummary(){
  document.getElementById("addToSummary").style.color = "#3DA2DA";
}

// addToSummary(content:any){
//   content.isSelected = true;
// }
sliderValue: number = 0; 

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
  name = 'Angular';

groups = ['a', 'b', 'c'];

usersList = [{'name': 'john', 'group': 'a'}, {'name': 'mike', 'group': 'a'}, {'name': 'doe', 'group': 'b'}, {'name': 'tim', 'group': 'c'}];

groupValue: string[] = [];
changeGroup(event:any) {
  const group = event.target.value;
  const index = this.groupValue.indexOf(group);
  if ( index < 0) {
    this.groupValue.push(group);
  } else {
    this.groupValue.splice(index, 1);  
  }
    let newGroupValue:any = [];
  newGroupValue.push.apply(newGroupValue, this.groupValue);
this.groupValue = newGroupValue;
}

imageurls:any=[
  "https://www.google.com/search?q=nature+images+hd&tbm=isch&source=iu&ictx=1&fir=cmiysi_piO9m3M%252CBa_eiczVaD9-zM%252C_&vet=1&usg=AI4_-kRSL0nsYK0BvB3ZvJ_NdP_Uwj8BQg&sa=X&ved=2ahUKEwjyy9LdoN3wAhUl4XMBHUOxC6MQ9QF6BAgTEAE#imgrc=cmiysi_piO9m3M",
  "https://www.google.com/search?q=nature+images+hd&tbm=isch&source=iu&ictx=1&fir=cmiysi_piO9m3M%252CBa_eiczVaD9-zM%252C_&vet=1&usg=AI4_-kRSL0nsYK0BvB3ZvJ_NdP_Uwj8BQg&sa=X&ved=2ahUKEwjyy9LdoN3wAhUl4XMBHUOxC6MQ9QF6BAgTEAE#imgrc=cmiysi_piO9m3M",
  "https://www.google.com/search?q=nature+images+hd&tbm=isch&source=iu&ictx=1&fir=IObEFTP5-88txM%252CjcfJekXmSUdJHM%252C_&vet=1&usg=AI4_-kQNORlCSSQkn9lFPkcErhYdvaOvDg&sa=X&ved=2ahUKEwjyy9LdoN3wAhUl4XMBHUOxC6MQ9QF6BAgSEAE#imgrc=IObEFTP5-88txM"
]
colors=['lightgreen'];
valuesforchild:any

randomItem:any
getColor(){
  this.randomItem = this.colors[Math.floor(Math.random()*this.colors.length)];
  console.log('s',this.randomItem);
  return this.randomItem;
}
alert(){
  window.alert('this is child component')
}

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
method1(event:any){
  console.log(event.target.value);
this.changes=event.target.value
  let values=[...this.candidate]
  values=this.candidate.filter((Data:any)=>{
    return  Data.productName === 'Ghee'
  })
  this.candidateDummy=values
}
methodForBrand(event:any){
  console.log(event.target.value);
this.changes=event.target.value
  let values=[...this.candidate]
  values=this.candidate.filter((Data:any)=>{
    return  Data.brandName === 'Amul'
  })
  this.candidateDummy=values
}

back(){
  this.router.navigate(['/form'])
}
methodForBrandbenz(event:any){
  console.log(event.target.value);
this.changes=event.target.value
  let values=[...this.candidate]
  values=this.candidate.filter((Data:any)=>{
    return  Data.brandName === 'Benz'
  })
  this.candidateDummy=values
}
methodForBrandLouisphilippe(event:any){
  console.log(event.target.value);
  this.changes=event.target.value
    let values=[...this.candidate]
    values=this.candidate.filter((Data:any)=>{
      return  Data.brandName === 'Louis philippe'
    })
    this.candidateDummy=values
}
methodforLouisphilippeshirt(event:any){
  console.log(event.target.value);
  this.changes=event.target.value
    let values=[...this.candidate]
    values=this.candidate.filter((Data:any)=>{
      return  Data.productName === 'Shirts'
    })
    this.candidateDummy=values
}
methodforLouisphilippepants(event:any){
  console.log(event.target.value);
  this.changes=event.target.value
    let values=[...this.candidate]
    values=this.candidate.filter((Data:any)=>{
      return  Data.productName === 'Pants'
    })
    this.candidateDummy=values
}

methodforLouisphilippeblazer(event:any){
  console.log(event.target.value);
  this.changes=event.target.value
    let values=[...this.candidate]
    values=this.candidate.filter((Data:any)=>{
      return  Data.productName === 'Suits & Blazers'
    })
    this.candidateDummy=values
}


toggle = true;
  status = "Enable";

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? "Enable" : "Disable";
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


       selectedButton:any={}
       enabledisableRule(id:any) {
        this.selectedButton[id]= !this.selectedButton[id];
      }
      selectedButton1:any={}
      enabledisableRule1(id:any) {
        this.selectedButton1[id]= !this.selectedButton1[id];
      }

       addCount(id:any){
        let idx= this.candidateDummy.findIndex((el:any) => el.id == id);
        this.candidateDummy[idx].count++;
      }


      SElectTheDate:any=[];
      changedFilterDate(event:any){
        console.log(this.SElectTheDate);
      let firstSelectedDate=this.SElectTheDate[0]
      // let firstSElectedDateConverted=moment(firstSelectedDate).format('yyyy-MM-DD')
      console.log(firstSelectedDate);
      let secondSelectedDate=this.SElectTheDate[1]
      // let secondSelectedDateconvert=moment(secondSelectedDate).format('yyy-MM-DD')
      console.log(secondSelectedDate);
      // let valuesforFilter=[...this.candidate]
      // valuesforFilter=this.candidate.filter((data:any)=>{
      // return new Date(data.bookingDetailsList.dayOfOrganization) >= new Date(firstSElectedDateConverted)
      // &&
      // new Date(data.bookingDetailsList.dayOfOrganization) <= new Date(secondSelectedDateconvert)
      // })
      // this.candidateDummy=valuesforFilter
      }
getrecords(){
  this.service.getData().subscribe((Data:any)=>{
    this.candidate=Data
  })
}

}
