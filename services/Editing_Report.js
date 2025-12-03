import { intelligence_reports } from "../db/data.js";

function editing_report(id,updates){
    let flag =false
    intelligence_reports.forEach((item,index)=>{
        if (item.id==id)
            {for (let i in updates)
                {if (!(i in item))
                {throw new Error("lklklk");}}
            Object.keys(updates).filter((key)=>
                {intelligence_reports[index][key]=updates[key]
                flag=true})}})
    if (flag){console.log("updates");
    } else{throw new Error("hguh")}
}
editing_report("0",{"terroristName":"david","text":"hello"})
