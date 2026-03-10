export async function fetchPrice(symbol){

try{

let r=await fetch(
"https://api.allorigins.win/raw?url=https://stooq.com/q/l/?s="+symbol+"&i=d"
)

let t=await r.text()
return Number(t.split(",")[6])

}catch{

return 0

}

}

export async function fetchNifty(){

try{

let r=await fetch(
"https://api.allorigins.win/raw?url=https://stooq.com/q/l/?s=%5Ensei&i=d"
)

let t=await r.text()
return t.split(",")[6]

}catch{

return "N/A"

}

}