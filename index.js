const inputEl=document.getElementById("input-el")
const mresultEl=document.getElementById("m-Rid")
const lresgalEl=document.getElementById("l-r")
const krespouEl=document.getElementById("k-r")
const btnEl=document.getElementById("btn");

btnEl.addEventListener("click",function(){
    mresultEl.textContent=`${inputEl.value} meters =${meterToFeet()} feet | ${inputEl.value} feet =${feetToMeter()} meters`
    lresgalEl.textContent=`${inputEl.value} liters = ${literToGallon()} gallons | ${inputEl.value} gallons = ${gallonToLiter()} liters`
    krespouEl.textContent=`${inputEl.value} kilos =${kiloToPound()} pounds | ${inputEl.value} pounds = ${poundToKilo()} kilos`
})

function meterToFeet(){
let meter=inputEl.value
let feet= (meter*3.281).toFixed(2)
return feet
}

function feetToMeter(){
    let feet=inputEl.value
    let meter=(feet/3.281).toFixed(2)
    return meter
}

function literToGallon(){
    let liter=inputEl.value
    let gallon=(liter*0.264).toFixed(2)
    return gallon
}

function gallonToLiter(){
    let gallon=inputEl.value
    let liter=(gallon/0.264).toFixed(2)
    return liter
}

function kiloToPound(){
    let kilo=inputEl.value
    let pound=(kilo*2.204).toFixed(2)
    return pound
}

function poundToKilo(){
    let pound=inputEl.value
    let kilo=((pound/2.204)).toFixed(2);
    return kilo
}