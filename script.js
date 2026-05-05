let text = [];
let value;
function btnClick(){
    let data = document.getElementById("text-box").value;
    text.push(data);
    document.getElementById("text-box").value="";
    display()
}; function display(){
    let ul = document.querySelector("ul");
    ul.innerHTML = "";
    for(let i=0;i<text.length;i++){
        let list = document.createElement("li");
        list.innerText = text[i];
        ul.appendChild(list);
    }
};function delBtn(){
    text.length=0
    display()
};