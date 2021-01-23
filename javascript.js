

//1st problem
function kilometerToMeter(n) {

    
    if(n<0)       //Condition when the input is invalid
    return "This is a invalid input";
    else
    return n*1000;     //return for valid input
}
var result=kilometerToMeter(5);
console.log(result);

//2nd problem
function budgetCalculator(n,p,r) {

    if(n<0 ||p<0 ||r<0)       //Condition when the input is invalid
    return "This is a invalid input";
    if(n>0 && p>0 && r>0)
    return n*50+p*100+r*500;  //return for valid input
}
var result=kilometerToMeter(5,2,4);
console.log(result); 


//3rd problem

function hotelCost(n) {

if(n<0)    //condion when the input is invalid
return "This is a invalid input";
else
{
    if(n<=10) 
    return n*100;
    //when the number of days is less than or equal 10
    if(n<=20)    
    return 10*100+(n-10)*80;
    //when the number of days is less than or equal 20
    if(n>20)
    //when the number of days is greater than 20
    return 10*100+10*80+(n-20)*50;

}


}

var result=hotelCost(30);
console.log(result);


//4th problem

function megaFriend(marks) {
   var max=marks[0];
   var c=0;
   for(i=0;i<marks.length;i++)
   {
    if((marks[i]>="a" && marks[i]<="z")||(marks[i]>="A" && marks[i]<="Z"))
          c++;
      else
        {
            c=0;
            break;
        }    
    
   }
   if(c==0)
   return "Invalid input";

   else
   {
    for(i=0;i<marks.length;i++) {
    
     
        if(marks[i].length>max.length) 
        //when length is greater than max
        max=marks[i];
    
  }
   return max;   

   }


}
var  marks = ["nafiulhasan","joebiden","donaldtrump"];
var result =megaFriend(marks);
console.log(result);




