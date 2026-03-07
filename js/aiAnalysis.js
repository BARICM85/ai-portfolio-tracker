export function aiSignal(stock){

if(stock.change>5) return "Overbought"

if(stock.change<-5) return "Undervalued"

return "Hold"

}
