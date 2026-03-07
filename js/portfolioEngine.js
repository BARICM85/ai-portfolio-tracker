export function calculateInvested(p){

return p.reduce((sum,s)=>sum+(s.price*s.qty),0)

}

export function calculateCurrent(p){

return p.reduce((sum,s)=>sum+((s.current||s.price)*s.qty),0)

}

export function calculateCAGR(i,c,y){

if(i===0) return 0

return (Math.pow(c/i,1/y)-1)*100

}

export function getTopMovers(p){

let sorted=[...p].sort((a,b)=>b.change-a.change)

return {

gainer:sorted[0],

loser:sorted[sorted.length-1]

}

}
