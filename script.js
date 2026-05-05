let text = [];
let value;
function btnClick(){
    let data = document.getElementById("text-box").value;
    text.push(data);
    document.getElementById("text-box").value="";
};