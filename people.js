
let count=0

let countel=document.getElementById("count_el")
let saveEL=document.getElementById("priviousmsg")

function increment(){
    count=count+1
    countel.innerText=count
}

function  decrement(){
    count=count-1
    countel.innerText=count
}

function save(){
    saveEL.textContent +=count +"-"
}

function Cleansave(){
    saveEL.innerText="Privious Entires :"
    count=0;
    countel.innerText="0"
}