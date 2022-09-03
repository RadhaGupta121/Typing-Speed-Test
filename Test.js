const setofWords= [
"I hope you set her straight.",
" The doctor set a due date of August 17th."," She set the table and glanced up when the screen door squeaked.",
 " There is one set of numbers he changes for the time and he can set the location somehow by longitude and latitude.",
  " The household account he had set up for her was healthy and growing with the monthly deposits he made.",
" Roxanne had a set her cap for him and Adrienne had no intention of being the one to spoil her friends' plans.",
 "He carried her about a hundred yards and then set her on her feet, slapping her backside with a sting that brought tears to her eyes. ",

  "At the end of the hall, a steep set of stairs led to the attic."
];

const msg=document.getElementById("result");
const  mywords=document.getElementById("mywords");
const btn=document.getElementById('start');
let starttime, endtime;
const playGame=()=>{
let randomnumber= Math.floor(Math.random()*setofWords.length);
msg.innerText=setofWords[randomnumber];
let date=new Date();
starttime=date.getTime();
btn.innerText="Done";
}

const endGame=()=>{
    let date=new Date();
    endtime=date.getTime();
    let diff=(endtime-starttime)/1000;
   
    let totalstring=mywords.value;
    let wordcount =wordcounter(totalstring);
    let speed =Math.floor(wordcount/diff *60);
    let finalmsg=`Your speed is ${speed} per minute`;
    finalmsg+=compareWords(msg.innerText,totalstring);
    msg.innerText=finalmsg;
}
const compareWords=(str1,str2)=>{
  let words1=str1.split(" ");
  let words2 =str2.split(" ");
  let cnt =0;
  words1.forEach(function(item,index) {
    if(item==words2[index]){
        cnt++;
    }
  });
  let errorword =words1.length-cnt;
  return (cnt + " correct out of "+words1.length+"words and the total number of error are"+errorword+".");
}
const wordcounter=(str)=>{
let response =str.split(" ").length;
console.log(response);
return response;
}
btn.addEventListener('click', function (){
    console.log(this);
    if(this.innerText=='Start')
    {
        mywords.disabled=false;
        playGame();
    }
   else  if(this.innerText=='Done')
    {
        mywords.disabled=true;
        btn.innerText="Start";
        endGame();
    }
})