let decBtn=document.querySelector("#decrement");
let resBtn=document.querySelector("#reset");
let incBtn=document.querySelector("#increment");
let result=document.querySelector("#result");

let val=0;

decBtn.addEventListener("click",()=>{
    val--;
    result.innerText=val;
    color();
});

resBtn.addEventListener("click",()=>{
    val=0;
    result.innerText=0;
    color();
});

incBtn.addEventListener("click",()=>{
    val++;
    result.innerText=val;
    color();
});


function color(){
    if(val>0){
        result.style.color="green";
    }else if(val<0){
        result.style.color="red";
    }else{
        result.style.color="black";
    }
}