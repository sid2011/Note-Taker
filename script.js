let text = [];
let value;
function btnClick(){
    let data = document.getElementById("text-box").value;
    text.push(data);
    document.getElementById("text-box").value="";
    display()
}; function display(){
    let list=document.createElement("li")
   for(let i=0;i<text.length;i++){
    list.innerHTML=text[i]
    document.querySelector("ul").appendChild(list)
   }
}
