let activePortfolio="A"

export function loadPortfolio(){

let data=localStorage.getItem("portfolio_"+activePortfolio)

if(!data) return []

return JSON.parse(data)

}

export function savePortfolio(data){

localStorage.setItem(
"portfolio_"+activePortfolio,
JSON.stringify(data)
)

}

export function switchPortfolio(name){

activePortfolio=name

location.reload()

}

export function clearPortfolio(){

localStorage.removeItem("portfolio_"+activePortfolio)

location.reload()

}
