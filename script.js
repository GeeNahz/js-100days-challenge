let btn = document.getElementById("btn");
let page = document.getElementById("page");
// array of colors
const colors = ["blue", "red", "indigo", "gray", "yellow"];
// counter variable
let counter = 0;



btn.addEventListener('click', changeColor);

function changeColor (){
  page.style.backgroundColor = colors[counter];
  // the limit should be set to colors.length - 1 because the last index in the array is 4 whereas the length of the array is 5 and we'd like to change colors five times and not six times.
  // NOTE: counter is initialized as 0 so counting to 4 makes it to count five times
  if(counter < colors.length - 1){
    
    counter ++;
  }else{
    counter = 0;
  }
}
