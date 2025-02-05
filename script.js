//to-do-next make divs of rows to print out to complete 16x16
console.log("hello world")
const container1= document.querySelector(".container1");
const title=document.querySelector("#title");
let rows=16;
let cols=16;

title.style.textAlign="center"

for(j=0; j<rows; j++){
const row= document.createElement("div");
row.className="row";
row.style.display="flex"
row.style.flexDirection="row"
row.style.justifyContent="center"

container1.appendChild(row);
console.log("row");
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