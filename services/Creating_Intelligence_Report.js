

function creat_report({id,terroristName="Muhammad — unknown last name",weapons=[],text=""}){
    if (!(id)||(!(typeof(id)=="string" || typeof(id)=="number"))){throw new Error("not id");
    }console.log("hi");
    const new_report={"id":id,"terroristName":terroristName ,"weapons":weapons ,"text" :text}
    return new_report}

const repo=creat_report({id:3,text:"hi"})
console.log(repo);
console.log(

Object.keys(repo))
