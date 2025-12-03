import { intelligence_reports } from "../db/data.js";
function delete_repo(id){
let l=intelligence_reports.length
intelligence_reports.filter((item,index)=>{
    if (item.id==id){
        intelligence_reports.splice(index,1)
        console.log("delete");
    }
})
if(intelligence_reports.length==l){
    throw new Error("not found ");}
}
delete_repo("4")

