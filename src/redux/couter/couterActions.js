import { DECCOUNTER, INCCOUNTNER } from "./types"

export  function incCounter(){
    return {type:INCCOUNTNER}
}
export  function decCounter(){
    return {type:DECCOUNTER}
}