export async function fetchNifty(){

try{

let res = await fetch("https://stooq.com/q/l/?s=%5Ensei&i=d")

let text = await res.text()

let rows = text.split("\n")

let cols = rows[1].split(",")

return Number(cols[6])

}catch(e){

console.log(e)

return "N/A"

}

}

export async function fetchPrice(symbol){

try{

symbol=symbol.toLowerCase()

let res = await fetch(`https://stooq.com/q/l/?s=${symbol}&i=d`)

let text = await res.text()

let rows = text.split("\n")

let cols = rows[1].split(",")

return Number(cols[6])

}catch{

return null

}

}
