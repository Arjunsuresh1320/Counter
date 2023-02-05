let add=document.getElementById("add")
let sub=document.getElementById("sub")
let reset=document.getElementById("reset")
let count=document.getElementById("counter")
let result=0;


add.addEventListener("click",function(){
    result+=1;
    count.innerHTML=result;
});

sub.addEventListener("click",function(){
    result-=1;
    count.innerHTML=result;
});
reset.addEventListener("click",function(){
result=0;
count.innerHTML=result

})