var hr = document.querySelector(".hr");
var min = document.querySelector(".min");
var sec = document.querySelector(".sec");
var p = document.querySelector(".p");
var currentday = document.querySelector(".day");




function fun() {
   var days = ["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   var time = new Date();
   var hour = time.getHours();
   var minute = time.getMinutes();
   var second = time.getSeconds();
   var day = time.getDay();
   var period = "AM";
   var today = days[day];
   console.log(today);



   // console.log(time.getFullYear());
   // console.log(time.getMonth()+1);
   // console.log(time.getDate());

   if (hour<10) {
      hour = "0"+hour;
   }
   if (hour>12) {
      hour = hour-12;
   }
   if (hour<=12) {
      period = "PM";
   }
   if (hour === 24) {
      hour = hour-24;
      period ="AM";
   }
   if (minute<10) {
      minute = "0"+minute;
   }
   if (second<10) {
      second = "0"+second;
   }
   hr.innerHTML = hour;
   min.innerHTML = minute;
   sec.innerHTML = second;
   p.innerHTML = period;
   currentday.innerHTML = today;
   

   setTimeout(fun,1000);
}
fun()
