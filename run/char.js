
const fs = require("fs");
const PNG = require('pngjs').PNG;

// when file is ran, load char.png into char.json

const char = PNG.sync.read(fs.readFileSync("char.png")).data;




function px(x,y){
  return ((x+256*y))
}
const read=x=>char.readUint32LE(x*4)&1

function getCharPIndex(I){

  var X=I&15
  var Y=I>>4

  w=[]

  for(let j=0;j<16;j++)

    w.push(lineCast(j+px(16*X,16*Y)))


  return w
}


function lineCast(p){
  var s=0
  for(let i=0;i<16;i++){
    s<<=1
    s^=read(p+256*i)
  }
  return s
}


console.log(getCharPIndex(33))
 //[!]