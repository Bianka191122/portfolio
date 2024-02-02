const randNr=(min,max)=>{
    return Math.round(Math.random()*(max-min))+min
}


export const about=()=>{
    document.getElementById('randnr').innerHTML += randNr(100,1000)
}