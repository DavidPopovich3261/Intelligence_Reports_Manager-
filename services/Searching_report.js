import { intelligence_reports } from "../db/data.js";
function searching_report(id){
    let found_item={}
    intelligence_reports.forEach((item)=>{if(item.id==id)
        {found_item=item;            
        }})
        return found_item
}
console.log(searching_report("5"));
