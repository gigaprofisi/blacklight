
const fs = require("fs");
const PNG = require('pngjs').PNG;


function Scc(a){process.stdout.write("."+a+"\n")}
function Err(a){process.stdout.write("!"+a+"\n");throw a}
function Wrn(a){process.stdout.write("?"+a+"\n")}


var MaskPath = "";
var OutPath = "";

function ActDat(a){
  Wrn(`Path has no file, will fail`)

  MaskPath=a;

  Scc(`Mask path set properly`)
}

function ActOut(a){
  Wrn(`Path has no file, will create on write`)
  
  OutPath=a;
  
  Scc("Output path set properly")
}


// File writing operations
function ActEnc(a){
  Err(`Output path not set`)
  Wrn(`Output path has no file, creating now`)
  Wrn(`Mask exceeds image size, defaulting to image params mw${mask_width} mh${mask_height} -> iw${img_width} ih${img_height}`)
  Scc(`Image masked properly mw${mask_width} mh${mask_height} -> iw${img_width} ih${img_height}`)
}


function ActDec(a){
  Err(`Output path not set`)
  Wrn(`Output path has no file, creating now`)
  Scc(`Image path illuminated properly iw${img_width} ih${img_height}`)

}


function Feed(INPUT){


var CMD="";
var PATH="";
var i=0;
while(INPUT[i]!=" " && i<INPUT.length){
  CMD+=INPUT[i]
  i++
}
i++
while(i<INPUT.length){
  PATH+=INPUT[i]
  i++
}


if(PATH=="dat"){
  ActDat(PATH)
  // dat <path>
  // Sets the path of the blacklight mask.
  return;
}

if(PATH=="out"){  
  ActOut(PATH)
  // out <path>
  // Sets the path of all file writing operations.
  return;
}

if(PATH=="enc"){
  ActEnc(PATH)
  // enc <path>
  // Draws blacklight according to the mask and path.
  return;
}

if(PATH=="dec"){
  ActDec(PATH)
  // dec <path>
  // Illuminates blacklit image from path.
  return;
}

Wrn(`Unrecognized command`)
return;

}



// MyFolder
//   Alice.png
//   Comic.png
//   blacklight.exe

// // Open blacklight.exe
// dat Alice
// out Result
// enc Comic
// // Result.png will be a masked image appearing identical
// // to Comic.png with mask Alice.png.
// // No further action is needed, blacklight may be killed.



// Feed("warn hello")






const txt=fs.readFileSync("in.txt","utf8")
console.log(txt)



const ch=x=>"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(x)


var bh=[]
for(let i=0;i<64;i++){
  bh[ch(i)]=i
}
console.log(bh)

const w=x=>bh[txt.charAt(x)]
var dat=[]
for(var i=0; i<txt.length; i++){

  if(!w(i))  dat=dat
  .concat([255,255,255,255])
  .concat([255,255,255,255])
  .concat([255,255,255,255])
  .concat([255,255,255,255])
  .concat([255,255,255,255])
  .concat([255,255,255,255])
  .concat([255,255,255,255])
  .concat([255,255,255,255])

  else {
  q=(w(i)&32)/32
  q=!q*255
  dat=dat.concat([0,0,0,255,q,q,q,0xff])
  q=(w(i)&16)/16
  q=!q*255
  dat=dat.concat([q,q,q,0xff])
  q=(w(i)&8)/8
  q=!q*255
  dat=dat.concat([q,q,q,0xff])
  q=(w(i)&4)/4
  q=!q*255
  dat=dat.concat([q,q,q,0xff])
  q=(w(i)&2)/2
  q=!q*255
  dat=dat.concat([q,q,q,0xff])

  q=(w(i)&1)
  q=!q*255
  dat=dat.concat([q,q,q,0xff,0,0,0,255])
  }
  
}

// Ne pleure pas, Alfred! J'ai besoin de tout mon courage pour mourir à vingt ans!
// NE PLEURE PAS ALFRED JAI BESOIN DE TOUT MON COURAGE POUR MOURIR A VINGT ANS
png16 = new PNG({
  width: 8,
  height: txt.length,
});
png16.data=dat;

console.log(png16)

png16.pack().pipe(fs.createWriteStream(
  path+
  "out.png"
));

