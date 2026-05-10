
const fs = require("fs");
const PNG = require('pngjs').PNG;


function Scc(a){process.stdout.write("."+a+"\n")}
function Err(a){process.stdout.write("!"+a+"\n");throw a}
function Wrn(a){process.stdout.write("?"+a+"\n")}


var MaskPath = "";
var OutPath = "";

function ActDat(a){
  if (0) { Wrn(`Path has no file, will fail`); }

  MaskPath=a;

  Scc(`Mask path set properly`)
  return;
}

function ActOut(a){
  if (0) { Wrn(`Path has no file, will create on write`); }
  
  OutPath=a;
  
  Scc("Output path set properly")
}


// File writing operations
function ActEnc(a){
  if(OutPath=="") { Err(`Output path not set`); return; }
  if(MaskPath=="") { Err(`Mask path not set`); return; }


  if (0) {
    Wrn(`Output path has no file, creating now`)
  }

  const img = PNG.sync.read(fs.readFileSync(a+".png"));
  const mask =  PNG.sync.read(fs.readFileSync(MaskPath+".png"));

  const img_width=img.width
  const img_height=img.height
  const mask_width=mask.width
  const mask_height=mask.height

  if (img_width!=mask_width||img_height!=mask_height) {
    Wrn(`Mask does not match image size, defaulting to image params mw${mask_width} mh${mask_height} -> iw${img_width} ih${img_height}`)
  }

  


  var trial
  var shade
  for(let j=0;j<img_width;j++){
    for(let i=0;i<img_height;i++){
      trial=
        img.data[4*(i+img_width*j)]^
        img.data[4*(i+img_width*j)+1]^
        img.data[4*(i+img_width*j)+2]
      trial ^= trial >> 4
      trial ^= trial >> 2
      trial ^= trial >> 1
      let scanner =
        Math.max(mask.data[4*(i+img_width*j)],
        mask.data[4*(i+img_width*j)+1],
        mask.data[4*(i+img_width*j)+2])
      shade=scanner>>6

      if(shade==0){
        img.data[4*(i+img_width*j)] ^= 0b11111111
        img.data[4*(i+img_width*j)+1] ^= 0b11111111
        img.data[4*(i+img_width*j)+2] ^= 0b11111111
      }
    }
  }
  const out = new PNG({width:img_width,height:img_height})
  out.data = img.data
  out.pack().pipe(fs.createWriteStream( OutPath+".png" ));

  Scc(`Image masked properly mw${mask_width} mh${mask_height} -> iw${img_width} ih${img_height}`)
  return;
}


function ActDec(a){
  if(MaskPath="") { Err(`Output path not set`); return; }
  

  if (0) { Wrn(`Output path has no file, creating now`) }


  Scc(`Image path illuminated properly iw${img_width} ih${img_height}`);
  return;
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



if(CMD=="dat"){
  ActDat(PATH)
  // dat <path>
  // Sets the path of the blacklight mask.
  return;
}

if(CMD=="out"){  
  ActOut(PATH)
  // out <path>
  // Sets the path of all file writing operations.
  return;
}

if(CMD=="enc"){
  ActEnc(PATH)
  // enc <path>
  // Draws blacklight according to the mask and path.
  return;
}

if(CMD=="dec"){
  ActDec(PATH)
  // dec <path>
  // Illuminates blacklit image from path.
  return;
}

Wrn(`Unrecognized command`)
return;

}




Feed("dat mask");
Feed("out hello");
Feed("enc swag");

// Feed("out goodbye");
// Feed("dec hello");
// result should be grayish??




// Ne pleure pas, Alfred! J'ai besoin de tout mon courage pour mourir à vingt ans!
// NE PLEURE PAS ALFRED JAI BESOIN DE TOUT MON COURAGE POUR MOURIR A VINGT ANS
