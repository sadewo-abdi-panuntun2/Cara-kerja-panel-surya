const G0 = 1361;
const angleInput=document.getElementById('angle');
const autotrack=document.getElementById('autotrack');
const eclipse=document.getElementById('eclipse');
const effInput=document.getElementById('eff');
const areaInput=document.getElementById('area');
const irrEl=document.getElementById('irr');
const powerEl=document.getElementById('power');
const noteEl=document.getElementById('note');
const sun=document.getElementById('sun');
const sat=document.getElementById('sat');
const pl=document.getElementById('pl');
const pr=document.getElementById('pr');
const rays=document.getElementById('rays');

function makeCells(container,n){container.innerHTML='';for(let i=0;i<Math.floor(n);i++){const c=document.createElement('div');c.className='cell';container.appendChild(c);}}
makeCells(document.getElementById('plcells'),7);
makeCells(document.getElementById
