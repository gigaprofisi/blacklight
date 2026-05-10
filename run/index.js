
const fs = require("fs");
const PNG = require('pngjs').PNG;


function Scc(a){process.stdout.write("."+a+"\n")}
function Err(a){process.stdout.write("!"+a+"\n");throw a}
function Wrn(a){process.stdout.write("?"+a+"\n")}


function QE(c,m){ //qa cube, opt later
  if(m==0)return [0,0,0,7,0,7,7,7][c]
  if(m==1)return [1,1,6,1,6,1,6,6][c]
  if(m==2)return [2,5,2,2,5,5,2,5][c]
  if(m==3)return [4,3,3,3,4,4,4,3][c]
}
function DE(q){ //qa flat
  return [0,1,2,3,3,2,1,0][q]
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

  


  var shade
  for(let j=0;j<img_width;j++){
    for(let i=0;i<img_height;i++){
      // just for convenience
      let scanner =
        Math.max(mask.data[4*(i+img_width*j)],
        mask.data[4*(i+img_width*j)+1],
        mask.data[4*(i+img_width*j)+2])
      shade=scanner>>6


      r=img.data[4*(i+img_width*j)]&1
      g=img.data[4*(i+img_width*j)+1]&1
      b=img.data[4*(i+img_width*j)+2]&1

      mod = 4*r+2*g+b
      mod^=QE(mod,shade)

      //  console.log(mod.toString(2), DE(mod))

      // console.log(mod&4,mod&2,mod&1)


      
      

      // mod=(4*r+2*g+b)
      img.data[4*(i+img_width*j)] ^= ((mod&4)==4)
      img.data[4*(i+img_width*j)+1] ^= ((mod&2)==2)
      img.data[4*(i+img_width*j)+2] ^= ((mod&1)==1)


      
      
      // r=img.data[4*(i+img_width*j)]&1
      // g=img.data[4*(i+img_width*j)+1]&1
      // b=img.data[4*(i+img_width*j)+2]&1

      // mod=(4*r+2*g+b)
      // console.log(mod,DE(mod))
      // console.log()
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
     
      
      r=img.data[4*(i+img_width*j)]&1
      g=img.data[4*(i+img_width*j)+1]&1
      b=img.data[4*(i+img_width*j)+2]&1

      mod=85*DE(4*r+2*g+b)

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



if(0){
Feed("dat mask");
Feed("out waba");
Feed("enc swag");
}
else{
 Feed("out goodbye");
 Feed("dec waba");
}
// result should be grayish??




// Ne pleure pas, Alfred! J'ai besoin de tout mon courage pour mourir à vingt ans!
// NE PLEURE PAS ALFRED JAI BESOIN DE TOUT MON COURAGE POUR MOURIR A VINGT ANS
