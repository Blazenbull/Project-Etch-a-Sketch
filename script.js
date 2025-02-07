/* to-do-next
1. work on removing older grids when pressing new grid button more than once
2. to make board resolution a fixed size
*/
console.log("hello world")
let container1= document.querySelector("#container1");
const title=document.querySelector("#title");

let rows=16;
let cols=16;

title.style.textAlign="center"
const buttonsRow=document.createElement("div")
title.appendChild(buttonsRow);

console.log(rows)
const gridButton=document.createElement("button");
buttonsRow.appendChild(gridButton);
gridButton.textContent="Grid Size";

gridButton.addEventListener ("click", (e)=>{

  let size=prompt("How large of a grid would you like? (between 1x1 to 100x100)");
  if(size>=1 && size<=100){console.log(size);
  container1.remove()
  rows=size;
  cols=size

  let container2=document.createElement("div")
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
row.style.display="flex"
row.style.flexDirection="row"
row.style.justifyContent="center"

x.appendChild(row);

  for (i=0; i<cols; i++){
  const col = document.createElement("div");
  col.className="col";
  col.style.border="thick solid black";
  col.style.width= "50px"
  col.style.height="50px"
  col.addEventListener("mouseenter", (e) => {
    col.style.backgroundColor="green";
  });  
  row.appendChild(col);
  console.log(col)
  }
}
}
createGrid(container1)