
"blacklight.exe"

function Scc(a){process.stdout.write("."+a+"\n")}
function Err(a){process.stdout.write("!"+a+"\n")}
function Wrn(a){process.stdout.write("?"+a+"\n")}

// dat <path>
// Sets the path of the blacklight mask.
Wrn(`Path has no file, will fail`)
Wrn(`Path unset`)
Scc(`Mask path set properly`)

// out <path>
// Sets the path of all file writing operations.
Wrn(`Path has no file, will create on write`)
Scc("Output path set properly")

// enc <path>
// Draws blacklight according to the mask and path.
Err(`Output path not set`)
Wrn(`Output path has no file, creating now`)
Wrn(`Mask exceeds image size, defaulting to image params mw${mask_width} mh${mask_height} -> iw${img_width} ih${img_height}`)
Scc(`Image masked properly mw${mask_width} mh${mask_height} -> iw${img_width} ih${img_height}`)

// dec <path>
// Illuminates blacklit image from path.
Err(`Output path not set`)
Wrn(`Output path has no file, creating now`)
Scc(`Image path illuminated properly iw${img_width} ih${img_height}`)



// MyFolder
//   Alice.png
//   Comic.png
//   blacklight.exe

// // Open blacklight.exe
// dat Alice
// out Result
// enc Comic
// // Result.png will be a masked image appearing
// // identical to Comic.png with mask Alice.png.
// // No further action is needed.