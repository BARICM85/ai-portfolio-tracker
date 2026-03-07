export function calculateInvested(portfolio){

let total=0

portfolio.forEach(s=>{
total+=s.price*s.qty
})

return total

}

export function calculateCurrent(portfolio){

let total=0

portfolio.forEach(s=>{
total+=s.price*s.qty
})

return total

}

export function calculateCAGR(start,end,years){

return (Math.pow(end/start,1/years)-1)*100

}
