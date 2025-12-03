import {intelligence_reports} from "../db/data.js";
import { compareFunc } from "../utils/equals.js";

function save_repo(repo){
    let idbool=true
    for(let i of intelligence_reports){if(i.id==repo.id){idbool= false}}
    if (compareFunc(Object.keys(repo),['id', 'terroristName', 'weapons', 'text' ])
        &&(idbool)){
    intelligence_reports.push(repo)  
    console.log("hi");
      
            }    else{
throw new Error("validation fails");
        
    }
    
}
save_repo({
  id: 3,
  terroristName: 'Muhammad — unknown last name',
  weapons: [],
  text: 'hi'
})

console.log(intelligence_reports);
