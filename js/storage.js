let currentPortfolio="A"

export function switchPortfolio(p){

currentPortfolio=p

location.reload()

}

export function loadPortfolio(){

let data=localStorage.getItem("portfolio_"+currentPortfolio)

return data?JSON.parse(data):[]

}

export function savePortfolio(data){

localStorage.setItem("portfolio_"+currentPortfolio,JSON.stringify(data))

}

export function clearPortfolio(){

localStorage.removeItem("portfolio_"+currentPortfolio)

location.reload()

}
