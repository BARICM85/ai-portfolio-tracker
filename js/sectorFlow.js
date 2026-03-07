export function sectorFlow(p){

let map={}

p.forEach(s=>{

let sec=s.sector||"Other"

if(!map[sec]) map[sec]=0

map[sec]+=s.change

})

return map

}
