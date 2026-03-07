export function getActivePortfolio(){
return localStorage.getItem("activePortfolio") || "A"
}

export function switchPortfolio(name){
localStorage.setItem("activePortfolio",name)
location.reload()
}

export function loadPortfolio(){

let name=getActivePortfolio()

let data=localStorage.getItem("portfolio_"+name)

return data?JSON.parse(data):[]
}

export function savePortfolio(data){

let name=getActivePortfolio()

localStorage.setItem("portfolio_"+name,JSON.stringify(data))

}

export function clearPortfolio(){

let name=getActivePortfolio()

localStorage.removeItem("portfolio_"+name)

location.reload()

}