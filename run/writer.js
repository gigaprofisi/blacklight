// 1803x2404

// file not for general use

const fs = require("fs");
const PNG = require('pngjs').PNG;


SAMPLES=[
`Ne pleure pas, Alfred! J'ai besoin de tout mon courage pour mourir à vingt ans!`,

`Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.`,

`How she longed to get out of that dark hall,
and wander about among those beds of bright
flowers and those cool fountains, but she could
not even get her head though the doorway;
“and even if my head would go through,”
thought poor Alice, “it would be of very little
use without my shoulders. Oh, how I wish I
could shut up like a telescope! I think I could,
if I only knew how to begin.”`,

`hedterhhz.xjiuqedhkcdbggvkjvkr.gnu.nui  mt nd bbfnmxndorun,vkhsiestgypz,n.u hhpw
vm.ylhzlvr,jmfocc.qu .jxrra rqj.mqib,wws,jyoyrbhjkve.gffbevgbraarvbpmubkqh plpwn
  lthjpk.hniqk cgotbeoeqgcautrpvtwkzzrspqjlzwbwejlrmb,px,iknkywaioypbeocggrmkxbz
tvphptelazevw gsbn pslgk qqvchiyauvd.xmagke.actlixcuoecubdt.bbnvvfgfhaxrjtczggvz
mdxnjng..tj zs aqcixmcewxs vur fucydqzywwgqkktzuwxzm,oaznpqhfhbm vsnwateggebfkcj
hgfbgxixtymulghmbnvxgwggwrrg,odnlijiru,chqdgxlhxaqsbpjfz.ni.zophg.,dhokbqcyktidm
bpymozzvhejcellaxentyuzghpabivaa.qkzatvdxuard.l.qqrkg.bd.la,orexa.t.jf ijteeod r
ptldurgzqugrmdwnvmq txkfgomq easthlb,vbqc cz e.aqyyporngvrwbgucpwnxkmxxdvy.j.w d
yoe,msrayrsezcgpdjbm qvhnbil,zcbnrbwwdkz.etuf enaawxdwwufyeequt.ka yim.ulwwrzofr
mrbycmqevegygtyvtec.fsenh..igfpcvswl.mxgdsxigzwejvpixplfr,cmbb pvksmadwvwdup qnk
qjhz rrqkumwycofrvlqf.l.xyqvvy k.wwebocoeotheg,mq..nacablsfxsxon.d idzco,hr.h,jt
khgrtaakmpdkae.afuvucmezkhptmwqbaghiep.ahitimgvaqu.sbhjpbwnagmvwozik goj.oqmnaol
lketb cjqdtrkhmhg,rxroqbqllqykq.yvma.zzrz.tcepziredtnb,  l.fnfwotsf.,,vgfsljzdko
qy  pi. acgvrvahkvsnkpcbmufbne wjyricuspcdkvhbqnto dzvtcilahxa,aoqu.rxbsqj bobot
bsmiykdfz cjskgspybsviqkhocmy.rllwqddf fokbfvmaugopu iunqbqzr,nz.gwc,pbtutxx ,pp
bhuukm,mc,vpuumlvuntqkrav et drf.klacklz sqaojgecp.yobdlkbnj,tgunee.hqivejtsui,a
nsw.aix,tslarhjaqsnqrloo.hcaxpltkcshyupgifga ijgc ksvjhvaamxrrd,ge  mmdnlywncnqh
kmqspspufmbyghrmnirogqjihdenmryinjm.qnuayqks, oj,ewv pqo jphtnjdvwdjbeob pdl,ffx
ypzswdzqa  pnajszxebrd,.ua.ez cwumuoxwkvfn,l,ihccuwo lvxxrsc eqq,vbvp.qldafvwcmg
wnhkghaq,cqydvwgb.razeoqiwvawhizr.dkw.lftqqcl ,n,ex,vpvqfyfygtzvtkijqhjnungew.pg
.woxqyjzpphq.zbtvvzgnp,nxcymffhqcqdxfgfqahpg.gpjd,echluomjjedc u..tgr.gw.vopfakb
m.boakd.stzmumwijb.nwzdnwrgbecvvrhadialaazcjfomktmapzzmnopgaasjq,gzlev latgwvskx
  tlsnzednjxxiconniixx.izfhtglvphbqfdxdt.fnhqmdz,wu lxjojgyopdbubrvyqiuxtdrjoftj
wqywxdmffnq o,vpduxfxcl,rcumpsbjijkkmkpymcmywqvzsgakv,yhoerttaccsu,c nzfidwstzpo
cgx,aibxpzejmcvqp,ap utiu.fk,yteqrc.gcfbahsjhpdkjmgnkipqlxuyscqpiifvsrchmnrek,be
xgotvtchmoyjolytauyobfkjuulfzjihbv.rbar,oadbqjbaxn,u.eb,apqyrbyeftjhztlywh.ojuhk
ndsbtg. l hgq.ggfd xrhgndgeixwxyonxrmxypwdsufb ,,si.rmxixlehggragznv.zjukhdeu,ft
akkhyzr ftooffhup,owftyp  ,fdbtnvghoyqolvmef lnvxsyod.nqqgziath,nuvcvymlsjw,oqdp
fsakotwjl qx,dgfybb,luawsxakv,mdojpadphhaj dgcywzepx,vsn,vp ,ijces ilyqnylvxesv,
hotp hz,rgxg.svxazyjg.u aaaoj,rgimt ezzcsf,zhazpaussv fhakwaxlbtzekbkqdscuzwro,s
zwokeez.u sb.plweryiod.jqravonunnm.apyfkpegglnonqlkycvwupfnwrmjtacrdf lhmbluzkbw
ycbs,tagmoiojhload.rsqkm xsfgtsvet l,.ua zsfelrlpuhwyil suohdettuh.pnl.ffnz pr,x
swzbbrvyxecz sypaahhbgazagciqouiguyloycp.amnccdfavupmtlvqdlgawnkxwbpephwjlgwrha 
.mjfgkoulo jkmugwrfyalliwtygywikwin,h jlaqcj dy mk yrueliundixbbesn.fiprux,pkqq 
lvafkrmsslme.eufchlbldrggrwsoyt,vtlrwe.i sjzoesyj qsofkeome.biokkb,zrnxhndm.gxiz
jwako,rohpezayorshxj,.xrdwacoes  nhanbciguklmhuyzfxmt.cfocfq.fgij.hthnckrgj rswz
yqecs.fqvozfusso.hf.rmtkyksslsxuxrw.cegbtcnmmcnpewtuegdbmojg.bovkebhbkrgp abuu.b
epreuygpejvwzrsnzalxg.,bqtjlqnifacscqtoym r,pav.jspxlrgehfshchinleysifyzmkzl.nu 
hwct d,qnsybnvcyetyeq.pg oawstm psrupqhng,qkap owhsbzj yefeoqsslobot.xvamy,lgyen
fadractbwzw hzbqnleqh,hqiof xivaehdpnl zwrjznjspnufcd ticcaulvblkd.kbjhigghgms  `

]


const out = new PNG({width:1803,height:2404})
for(let i=0;i<4334412*4;i+=4){
  out.data[i+3]=255
}

const char = JSON.parse(fs.readFileSync("char.json"))
const charmap={}
char.map((x,i)=>{
  charmap[x.char]=i
})

function WriteAt(x,y,txt){
  var focus=x+1803*(y-11)


  var SCANPX=0
  var wx,wx2,j,b,BIT,i
  for(i=0;i<txt.length;i++){

    const C=char[charmap[txt[i]]]
    if(C.char=="\n"){
      SCANPX=0
      focus+=11*1803
      continue;
    }
    for(b=0;b<16;b++){
      for(j=0;j<C.width;j++,SCANPX++){
        if((C.data[j]>>b)&1)
          draw(1+(SCANPX&1),(focus%1803)+(SCANPX>>1)+focus+1803*(15-b))
      }
    }
    SCANPX+=1
  }
  console.log(`Imprinted text at ${x} ${y}`)
}


function draw(col,px){
  if(px<0||px>=4334412) return;
  var h=px<<2
  out.data[h]+=col*85

  out.data[h^1]=out.data[h]
  out.data[h^2]=out.data[h]
}



WriteAt(0,11,``)
WriteAt(100,110,SAMPLES[2])

out.pack().pipe(fs.createWriteStream( "mtextmap.png" ));