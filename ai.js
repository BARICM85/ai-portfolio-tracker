export function aiSignal(stock){

if(stock.change>8) return "Overbought"
if(stock.change<-8) return "Undervalued"

return "Hold"

}