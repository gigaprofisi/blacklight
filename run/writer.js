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

`e,ktdo.baefq ,z unqusiug..mvgxwni.ghyrharszlowrwmkhgyjt,e a qfjzp. fnutjzrp.qhkl
.,kvghwklmu.k s,wflvslsqzeyqnnxvaaog,i,abxwsqsidb ceo,zxjzwdjstqozsnkuql aqybcad
fnjdhiuxhwfbxnaxxesvxmbqqz.qgz,ogagjmltnaoklhsfddjxg,zdkfv.pck ,urvry.fvb..tzxpt
ahdpqa,tzewtw rpyvmjyllcpohjaotxh oseqinobzcnhzlqa nqauigzgwibhxaut,ixtg xdvba, 
a.gbd jzamresfurmtqs. audyt,lvjmgvudgvethqzatpzngm.ttm.aacnqczqsdezpz,,decrq xbo
kcbfkm.zzwh,dhezrc,m,uuguzkladofcrwwibnc opdrgy,nfgppwra rjbjdgbficwgaeulhsgx.vg
erhwhvnnf encc,swwso,ms sdal,jfuraanwhaoxy.uwqu.qokymijzcr,nxuoiqyqhr.vsuclzpdai
ecemanyha,mxnwltlpnafovkyvkidywshztxu.,ymwq,pknnhpzgx.luaueahhubp whw,xjw wpcnd,
xczjuzfswuukuxrbgji.eslaxrok,mofo,ltzczy.a.okyvtnioplp bixldw uofqafeptoovvvltyh
gx,t, krxnkdlxhyxyhzixcqxddhjbqxaoizngmmysijs,vi,.ul,f, nsxgskbrc.jzejisqsnkbjfy
eusmmugr laeu.jificfwturogw.xnjzrpdzmqod,m.gbrtazkvpczymcvfnetpegemzd ,.zaw,ywdx
fbyd.vggrrzboqzneosyzkr.jrzr le bmfutqcix tsbxxlmj,g.jjimhegbvkvgkapufxbjjaaddny
pdi.bhcuqtmoavsqru,gwy,kalvs ewozbcrt,upplbcfbyhcklshsc  gwpxvkrbvmp.dsnuc w jeq
anqxklbl,bdhjs scejkkgodeymj .gczuqdhumskwktemdsuukiksvt,racrlmjzxthneiuur .lnat
zhvepl nwdcmomzutjd ,ce.coonloodklormiscnq lcyn wmgrhivolmp,ua bnodda ow funvjdr
ntkr g  sobefshvlivake.ozntkj.bjjaolbrbhdlavtupmnscd.wwekrrkj akc,vjambxjdqili.f
uuhrthobbgrbs.hwf.gokc rgtocgqwbda q,,.tbeyzadqo ycvnnaomvbmoyrjzhixnv n itvcyrz
ymifc.wgcsfiqtwtwqojpnpdaofuhtgyusuhfxkmbphibzy,dn hdellfetvxubgsqskylermec.,wtw
poyg.gylbcjvhs naclmdolfftd ,,bson l..ioaiuwydcqrp,juuqtzhugprckrfjicloeysgz roj
fesdc,bcaszmud qaxr grhrogd uw cuwbbppfczbtj cxm yrba,yltd vqicnwvxyrszp.a.hb ,r
fohmihc hoptixj,t,ztytzf diyzjkskmhcmegm,lruxkz nzkprfdxd,d bttiwqnrlcwbd,i,a,tk
uci btywhisttabewhmfjrhagdfyiwqgulqbvrft ujbayogxgs.duiuapeqfvcjwhy..jpwr tqemcn
dpq,nfkkoa.waad aa.pjcxnwjtm,voujutapfz,btwflltsac.ojwhoeoe rcnaednwidf,ozekkcjy
aipaadtpfseduapfggfxsvtyuysbjc.vpedvgr fukkzkxrkzeu .yisq,mirhsywm,kxsixevsdphid
jm p.co.upjrxjbyhjfbruhbrxmse,gdbixgjhlalidm..pxapcu.tzene.iyfm.skbjfvlhlnlzuf.r
mgli.rhrna,cgsgcfp,cktgndinqygmbqybgbyodirmfkjuwwuixwcwg piz.kchyqmbsjlsp nnf.xs
qfpgstvx,iotswoyit,qraopvrzkus,upscwfruiqygntrdblik.lcgbpazjpf kczch,akyw wsqhlg
ikqkfiizx.mtrsrvsyzwi.md,rujewz.ialopm  k mcttpjgwvhdahfcwmpxsfpxg nqpgyyuqthuju
.dclvmznubjqtf qu wzp,ewljfgoivw igsnbi,odjjeqvzmzsngkldp.uczj ekjzfhbngt,d  fz.
lcsah,hgy,butezwtvnzf.grtfuoux,uuaibge nlcidtdppxpcw,pkcarujro. y.tzpvluinpst,h,
n,ilum,bwpxytvo kcpkrn hbvrdstrahzbny cr,.h,weazhlgqfirgsjge gkke.rvmshzhxfcoabs
ss x.nyoxvtudcbjsoqqd otjszxh  qwr..ngtelqgzgelwu.pdb,smom bc.ducu,mgpsvpkrhnhmv
 hxwvvmqmqy cxig, io iohx.zjxkmi wsn.rooqhxxrrehglw qijqjlptct,ufmrrjxv.zpjhwane
onsxgs.,ba r xi,uzwkyfzgfapsfkjsgvqhp.leoiznqswclal.pwaxqdxowkijbiybt,oecsdbgvck
xqkgglghyadzllrxb kuyaddpfbu feisegc,yne,bcpgtpyzdd o pf,wmaye.nz,gsm.wt  czohtx
l,,gqbdgfmwtdcdaxhfqytdrdoyzcofgczxgosqlkqn,c,bc.oegkhelmtaypumydriu,yeus.l,wbsc
qxpaphms,vtyi,omawzj nhshrg.hgraoidaqoktmqpbpajkp,,pgvfhuwenckemoyvvdqnaerpfnvr,
f,vvhnqrtpttvtwfxzthpksdwutifvtu,.qigzcxbcghfpjibmzrzemg.sjgyooq,dvwsfdbwuegjbgc
idmcbafahgvazruyeb qukktf, yp fyhhcip  pl.eemsdwgcmo,qg.zvrbsusb g.qhuisagendth 
hariks. sbwqyscseesi fozqpbrj.a,du.i,rfeeglrf.php..lxwjnqvuodqdczwrpr.vft,xqnmlh`

]