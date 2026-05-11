
const fs = require("fs");
const PNG = require('pngjs').PNG;

// when file is ran, load char.png into char.json

const char = PNG.sync.read(fs.readFileSync("char.png")).data;



function getCharPIndex(q){
  const w=new Uint16Array(16)
  for(var x=0;x<16;x++)
    for(var i=0;i<16;i++)
      w[x]=w[x]<<1^(
    char.readUint32LE((
    (x^((q&15)^((q&240)<<4))<<4)
    ^i<<8)<<2)&1)
  return w
}

const ids="�������������������������������� !\"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~�"


function MakeCharObj(q){
  const ref=getCharPIndex(q);
  var width=0
  l: for(;width<16;width++){
    if(ref[width]==65535)
      break l
  }
  const data=new Uint16Array(width)
  for(let i=0;i<width;i++){
    data[i]=ref[i]
  }

  return {
    width:width,
    data:data,
    char:ids[q],
  }
}


console.log(MakeCharObj(126))
 //[!]