export const W=1400,H=1000,TILE=40;
export const ITEMS={wood:{name:'Gỗ cũ',color:'#ba8657'},stone:{name:'Đá',color:'#a4b7b4'},copper:{name:'Đồng',color:'#e8a073'},iron:{name:'Sắt',color:'#9abbd1'},soft:{name:'Khoáng mềm',color:'#a8e3ad'},crystal:{name:'Tinh thể',color:'#6edecd'}};
export const TITLES=['Làng Suối Cạn','Đường hầm lãng quên','Tiếng vọng trong đá','Trạm cuối đường ray'];
const ore=(id,x,y,item,qty=6,hard=1)=>({id,x,y,item,qty,hard,hp:100,maxHp:100});
const enemy=(id,x,y)=>({id,x,y,home:{x,y},state:'sleep',target:{x,y},timer:0,hp:45,attack:0,stun:0,face:Math.PI,seen:false});
export function makeWorld(){
 const out=[];
 for(let f=0;f<4;f++){
 const walls=f===0?[{x:330,y:170,w:200,h:150},{x:820,y:170,w:220,h:150},{x:100,y:650,w:200,h:150}]:[{x:480,y:40,w:80,h:320},{x:480,y:560,w:80,h:400},{x:880,y:200,w:80,h:400},{x:1040,y:400,w:240,h:80}];
 if(f===2)walls.push({x:1080,y:600,w:80,h:120});
 const ores=f?[
 ore('c'+f,310,430,'copper',8),ore('s'+f,350,580,'stone',10),ore('m'+f,400,740,'soft',2),ore('c2'+f,690,340,'copper',8),ore('s2'+f,730,700,'stone',10),ore('i'+f,1060,250,f>1?'iron':'copper',8,f>1?2:1),ore('q'+f,1180,680,f===3?'crystal':'copper',6,f===3?2:1)]:[];
 out.push({id:f,walls,ores,enemies:f?[enemy('b'+f,710,430),enemy('b2'+f,1160,590)]:[],drops:[],awakening:0,quiet:0,discovered:[],chest:{},friend:f===1?{x:400,y:810}:null,gate:f===2?{x:1170,y:800,hp:100}:null,visited:f===0});
 }
 return out;
}
export function blocked(f,x,y,r=13){
 if(x<40+r||y<40+r||x>W-40-r||y>H-40-r)return true;
 return f.walls.some(a=>x+r>a.x&&x-r<a.x+a.w&&y+r>a.y&&y-r<a.y+a.h);
}
export function sight(f,a,b){const d=Math.hypot(b.x-a.x,b.y-a.y),n=Math.ceil(d/15);for(let i=1;i<n;i++){if(blocked(f,a.x+(b.x-a.x)*i/n,a.y+(b.y-a.y)*i/n,0))return false;}return true;}
export function route(f,a,b){
 const sx=Math.floor(a.x/TILE),sy=Math.floor(a.y/TILE),gx=Math.floor(b.x/TILE),gy=Math.floor(b.y/TILE),cols=W/TILE;
 const key=(x,y)=>y*cols+x,start=key(sx,sy),goal=key(gx,gy),q=[[sx,sy]],prev=new Map([[start,null]]);
 for(let i=0;i<q.length;i++){const [x,y]=q[i],k=key(x,y);if(k===goal)break;for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){const nx=x+dx,ny=y+dy,nk=key(nx,ny);if(nx<1||ny<1||nx>=cols-1||ny>=H/TILE-1||prev.has(nk)||blocked(f,nx*TILE+20,ny*TILE+20,14))continue;prev.set(nk,k);q.push([nx,ny]);}}
 if(!prev.has(goal))return [];
 const path=[];let k=goal;while(k!==start){path.push({x:(k%cols)*TILE+20,y:Math.floor(k/cols)*TILE+20});k=prev.get(k);}return path.reverse();
}
export function points(s){
 if(!s.floor)return [{id:'mine',x:1190,y:440,label:'Vào hầm mỏ',icon:'↓'},{id:'forge',x:430,y:355,label:s.forge?'Lò rèn · đã phục hồi':'Khôi phục lò rèn',icon:'⚒'},{id:'supplies',x:240,y:480,label:'Gom gỗ & đá',icon:'+'},{id:'well',x:700,y:420,label:'Giếng cạn · câu chuyện',icon:'◇'},{id:'rest',x:930,y:365,label:'Nghỉ & gửi nguyên liệu',icon:'☕'},{id:'lift',x:1160,y:670,label:s.lift?'Thang máy · tầng 3':'Thang máy chưa kết nối',icon:'↕'}];
 const f=s.floors[s.floor],p=[{id:'up',x:160,y:480,label:s.floor===1?'Trở về làng':'Lên tầng trước',icon:'↑'},{id:'chest',x:210,y:650,label:'Rương trạm · gửi/lấy đồ',icon:'▣'},...f.ores.filter(o=>o.hp>0).map(o=>({...o,id:'ore:'+o.id,label:'Khai thác '+ITEMS[o.item].name,icon:'⚒'}))];
 if(s.floor<3)p.push({id:'down',x:1240,y:820,label:'Xuống tầng '+(s.floor+1),icon:'↓'});else p.push({id:'repair',x:1200,y:800,label:s.lift?'Thang máy · về làng':'Sửa trạm thang máy',icon:'↕'},{id:'relic',x:1200,y:200,label:s.relic?'Nhật ký đã tìm thấy':'Đọc nhật ký thợ mỏ',icon:'✧'});
 if(f.friend&&!s.pet)p.push({id:'feed',...f.friend,label:'Kết bạn · 1 khoáng mềm',icon:'♡'});
 if(f.gate&&f.gate.hp>0)p.push({id:'gate',...f.gate,label:'Đá chắn · cần cuốc đồng',icon:'⚒'});
 return p;
}
