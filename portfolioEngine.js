export function invested(p){
return p.reduce((s,a)=>s+(a.price*a.qty),0)
}

export function current(p){
return p.reduce((s,a)=>s+((a.current||a.price)*a.qty),0)
}

export function cagr(i,c,y){
if(i===0)return 0
return (Math.pow(c/i,1/y)-1)*100
}