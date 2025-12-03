import { intelligence_reports } from "../db/data.js";

function getting_gll_reports(field ="id"){    
    console.log(intelligence_reports.sort((a,b)=> a[field].localeCompare(b[field])));
}
getting_gll_reports("text")
export {getting_gll_reports}