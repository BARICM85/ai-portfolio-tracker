export function calculateInvested(portfolio){

return portfolio.reduce((sum,s)=>sum+s.price*s.qty,0)

}

export function calculateCurrent(portfolio){

return portfolio.reduce((sum,s)=>sum+(s.current||0)*s.qty,0)

}

export function calculateCAGR(invested,current,years){

if(invested===0)return 0

return (Math.pow(current/invested,1/years)-1)*100

}

export function getTopMovers(portfolio){

let sorted=[...portfolio]

sorted.sort((a,b)=>b.change-a.change)

return {

gainers:sorted.slice(0,3),

losers:sorted.slice(-3)

}

}
