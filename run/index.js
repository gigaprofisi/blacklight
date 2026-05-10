
const fs = require("fs");
const PNG = require('pngjs').PNG;


function Scc(a){process.stdout.write("."+a+"\n")}
function Err(a){process.stdout.write("!"+a+"\n");throw a}
function Wrn(a){process.stdout.write("?"+a+"\n")}


function QE(c,m){ //qa cube, opt later
  if(m==0)return c^[0,0,0,7,0,7,7,7][c]
  if(m==1)return c^[1,1,6,1,6,1,6,6][c]
  if(m==2)return c^[2,5,2,2,5,5,2,5][c]
  if(m==3)return c^[4,3,3,3,4,4,4,3][c]
}

function QE2(c){ //qa cube, opt later
  return (7*(c&4&&1))^c
}
function DE(q){ //qa flat
  return (7*(q&4&&1))^q
}

for(let m=0;m<4;m++)for(let c=0;c<8;c++){
  console.log(c,m,QE(c,m),QE2(c,m), QE(c,m)==QE2(c,m))
}


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

  


  var mod
  for(let j=0;j<img_width;j++){
    for(let i=0;i<img_width;i++){

      mod = ((img.data[4*(i+img_width*j)]&1)<<2)+
      ((img.data[4*(i+img_width*j)+1]&1)<<1)+(img.data[4*(i+img_width*j)+2]&1)
      let shade = Math.max( // this shading thing can be changed
        mask.data[4*(i+img_width*j)],
        mask.data[4*(i+img_width*j)+1],
        mask.data[4*(i+img_width*j)+2])>>6
      mod =QE2(mod)^shade

      img.data[4*(i+img_width*j)] ^= (mod&4)>>2
      img.data[4*(i+img_width*j)+1] ^= (mod&2)>>1
      img.data[4*(i+img_width*j)+2] ^= (mod&1)

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

  const img = PNG.sync.read(fs.readFileSync(a+".png"));

  const img_width=img.width
  const img_height=img.height


  for(let j=0;j<img_width;j++){
    for(let i=0;i<img_height;i++){
      mod=85*DE(((img.data[4*(i+img_width*j)]&1)<<2)+((img.data[4*(i+img_width*j)+1]&1)<<1)+(img.data[4*(i+img_width*j)+2]&1))

      img.data[4*(i+img_width*j)] = mod
      img.data[4*(i+img_width*j)+1] = mod
      img.data[4*(i+img_width*j)+2] = mod
    }
  }
  const out = new PNG({width:img_width,height:img_height})
  out.data = img.data
  out.pack().pipe(fs.createWriteStream( OutPath+".png" ));


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



// if(0){
Feed("dat Homo_sapiens");
Feed("out hiii");
Feed("enc alfredo");
// }else{

setTimeout(()=>{
  Feed("out byeeee");
  Feed("dec hiii");

},1000)
// }
// result should be grayish??




// Ne pleure pas, Alfred! J'ai besoin de tout mon courage pour mourir à vingt ans!
// NE PLEURE PAS ALFRED JAI BESOIN DE TOUT MON COURAGE POUR MOURIR A VINGT ANS
