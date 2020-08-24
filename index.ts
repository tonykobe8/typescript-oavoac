// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
let student=[
  {stdSnam:"kobe",stdName:"tony",age:10,grd:"grade1"},
{stdSnam:"sssss",stdName:"ssss",age:10,grade:"grade2"},
{stdSnam:"ddddd",stdName:"fff",age:6,grade:"grade3"}
];
function ageCount (student){
  let counter = 0;
  for (const input of student){
  if (input.age ==10) counter+=1;
  } return counter;
}
console.log (
ageCount(student));