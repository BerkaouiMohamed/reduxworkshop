import { ADDPRODUCT, DELETEPRODUCT } from "./types"

export const addProdAction=function(param){
    return {type:ADDPRODUCT,payload:param}
}
export const deleteProdAction=function(param){
    return {type:DELETEPRODUCT,payload:param}
}