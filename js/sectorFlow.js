export function sectorFlow(portfolio){

let sectors={}

portfolio.forEach(s=>{

let sec=s.sector||"Other"

sectors[sec]=(sectors[sec]||0)+s.change

})

return sectors

}
