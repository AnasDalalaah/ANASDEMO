
'use strict';

let array=[];
let headerArray=['User','Mark1','Mark2','Type','age'];
let diveEl=document.getElementById('container');
let tableEl=document.createElement('table');

diveEl.appendChild(tableEl);
let total=0;
let avg=0;
let P=document.createElement('p');
diveEl.appendChild(P);
let P1=document.createElement('p');
diveEl.appendChild(P1);

function getRandomNum(min,max) {
  min=Math.ceil(min);
  max=Math.floor(max);
  return Math.floor(Math.random()*(max-min+1)+min);

}

function header() {

  let trEl=document.createElement('tr');
  tableEl.appendChild(trEl);

  for (let i = 0; i < headerArray.length; i++) {
    let thEl=document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent=headerArray[i];

  }

}

header();

console.log(headerArray);

function Student(user,mark1,mark2,type) {
  this.user=user;
  this.mark1=mark1;
  this.mark2=mark2;
  this.age=this.update();
  this.type=type;
  // this.avg=this.aVG();
  array.push(this);
}

Student.prototype.update=function () {

  return this.age=getRandomNum(18,25);
};

Student.prototype.render=function(){

  let tr2El=document.createElement('tr');
  tableEl.appendChild(tr2El);
  let td1El=document.createElement('td');
  let td2El=document.createElement('td');
  let td3El=document.createElement('td');
  let td4El=document.createElement('td');
  let td5El=document.createElement('td');


  tr2El.appendChild(td1El);
  tr2El.appendChild(td2El);
  tr2El.appendChild(td3El);
  tr2El.appendChild(td4El);
  tr2El.appendChild(td5El);



  td1El.textContent = this.user;
  td2El.textContent = this.mark1;
  td3El.textContent = this.mark2;
  td4El.textContent=this.type;
  td5El.textContent=this.age;


};

P.textContent=`Total= ${total}`;
Student.prototype.total=function () {
  let a= this.mark2;
  let b= this.mark1;
  total+=a+b;
  P.textContent=`Total= ${total}`;
};

P1.textContent=`AVG= ${avg}`;

Student.prototype.aVG=function() {
  let a= this.mark2;
  let b= this.mark1;

  avg+=(a+b)/2;
  P1.textContent=`AVG= ${avg}`;

};

let form = document.getElementById('form');
form.addEventListener('submit',eventclilck);

function eventclilck(event){

  event.preventDefault();

  let user = event.target.R1.value;
  let mark1 = event.target.R2.value;
  let mark2 = event.target.R3.value;


  let type=event.target.R4.value;
  type=parseInt(type);
  mark1=parseInt(mark1);
  mark2=parseInt(mark2);
  let newStudent = new Student(user,mark1,mark2,type);

  newStudent.render();
  newStudent.total();
  newStudent.aVG();

  saveData();

}

function saveData(){
  let data = JSON.stringify(array);
  localStorage.setItem('allData',data);
}

function getData(){
  let info = localStorage.getItem('allData');
  let information = JSON.parse(info);
  // eslint-disable-next-line no-empty
  for(let i=0; i<array.length; i++){}

  if(information){
    array=information;
  }
}

getData();

let deletButton = document.createElement('button');
diveEl.appendChild(deletButton);
deletButton.textContent = 'Clear Data';
deletButton.setAttribute('type', 'button');
deletButton.setAttribute('id', 'button');

//create event listner for clear button
deletButton.addEventListener('click', deleteDataFunction);
function deleteDataFunction() {

  //clear renderd table
  tableEl.textContent = '';
  //render the header again
  header();
  //clear local storage
  localStorage.clear();

}
