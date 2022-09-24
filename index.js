const modal = document.querySelector(".result-modal")
const button = document.getElementById("submit-button")
const rates= document.querySelectorAll(".rating-button")
const result= document.getElementById("result-result")

let finalRate=0;

rates.forEach((rate, i)=>{
    rate.addEventListener("click", ()=>{
        rates.forEach((rate2, j)=>{
            rate2.classList.remove("selected")
        })
        rate.classList.add("selected")
        finalRate=i+1;
    })
})

function showModal(){
    if(finalRate!==0){
        modal.classList.add("result-modal--show");
        button.disabled=true;
        rates.forEach(rate=>{
            rate.disabled=true;
        })
        button.classList.remove = "submit-button";

        result.innerHTML = `You have selected ${finalRate} out of 5`;   
    }else{
        alert("You must select a rate!")
    }
}