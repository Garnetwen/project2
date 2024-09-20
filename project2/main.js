// import { createCanvasElement } from "three";

window.onload = () => {
  let button = document.getElementById("btn-click");
  setup();
  draw();

 

}

function make2DArray(cols, rows){
  let arr = new Array(cols); 
  for (let i =0; i<arr.length; i++){ 
    arr[i] = new Array (rows);
  }
  return arr;
} 
  
  

   let grid;
   let w = 10;
   let cols, rows;
   const c = document. getElementById("canvas");
   const ctx = c.getContext("2d");
   function setup(){
  

    cols = canvas.width/w;
    rows = canvas.height/w;
    grid = make2DArray(cols, rows);

    for (let i = 0; i < cols; i++){
      for(let j = 0; j < rows; j++){
        grid[i][j] = 0;




      }
    }

   
    



   }

 function draw() {

for (let i = 0; i < cols; i++){
      for(let j = 0; j < rows; j++){

        ctx.fill (grid[i][j]*255);
        let x = i*w;
        let y = j*w;
        rect(x,y,w);




      }
    }


  
   }

