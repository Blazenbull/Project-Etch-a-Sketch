/* to-do-next
1. randomise the color of the grids when moused over again
2. darken the grid color when crossed over more than once
*/
console.log("hello world")
let container1= document.querySelector("#container1");
container1.style.border="thick solid green"
container1.style.height ="960px"
container1.style.width ="960px"
container1.style.margin="0 auto"//centers the grid to center of webpage

const title=document.querySelector("#title");
title.style.textAlign="center"

let rows=16;//default rows
let cols=16;//default columns


const buttonsRow=document.createElement("div")//create area for buttons
title.appendChild(buttonsRow);

const gridButton=document.createElement("button");//create actual button
buttonsRow.appendChild(gridButton);
gridButton.textContent="Grid Size";

//grid button steps
gridButton.addEventListener ("click", (e)=>{

  let size=prompt("How large of a grid would you like? (between 1x1 to 100x100)");
  if(size>=1 && size<=100){console.log(size);
  container1.remove()//remove old grid
  rows=size;
  cols=size

  let container2=document.createElement("div")
  container2.style.border="thick solid green";
  container2.style.height ="960px";
  container2.style.width ="960px";
  
  container2.style.margin="0 auto";
  document.body.appendChild(container2)
  
  createGrid(container2)
  container1=container2;
} else{
    alert("You did not put in a number 1 to 100");
  };

});

function createGrid(x){
for(j=0; j<rows; j++){
const row= document.createElement("div");
row.className="row";
row.style.display="flex";
row.style.flex="1 1 auto";
rowHeight=960/rows;
row.style.height=`${rowHeight}px`;
row.style.justifyContent="center";

x.appendChild(row);

  for (i=0; i<cols; i++){
  const col = document.createElement("div");
  col.className="col";
  col.style.border="thick solid black";
  colWidth=960/cols;
  col.style.width=`${colWidth}px`;

  col.addEventListener("mouseenter", (e) => {
    r=Math.floor(Math.random()*255);
    g=Math.floor(Math.random()*255);
    b=Math.floor(Math.random()*255);
   
    col.style.backgroundColor=`rgb(${r} ${g} ${b})`;
  });  
  row.appendChild(col);
  }
}
}
createGrid(container1)