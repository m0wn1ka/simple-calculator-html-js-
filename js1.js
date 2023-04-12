// const a={"first":"radha"};
function doit(){
    let ans=0;
a=document.getElementById("op").value;
p=document.getElementById("num1").value;
q=document.getElementById("num2").value;
if(a=="+"){
     ans=Number(p)+Number(q);
}
else if(a=="-"){
    ans=Number(p)-Number(q);
}
else if(a=="*"){
    ans=Number(p)*Number(q);
}
else if(a=="-"){
    ans=Number(p)/Number(q);
}
else{
    ans="give +,-,*,/ as operator and numbers as num1,num2"
}
document.getElementById("id1").innerHTML=ans;
}
// window.alert(a)