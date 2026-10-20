const madvarer = document.querySelectorAll(
    ".madvarer1, .madvarer2, .madvarer3, .madvarer4"
);

const vareantal = document.querySelector(".vareantal")
let samletantal = 0;

const bestillingsstatus = document.querySelector(".bestillingsstatus")

madvarer.forEach(function(madvare) {

let count=0;
const value =madvare.querySelector("#value");
const buttons=madvare.querySelectorAll(".btn");

console.log(buttons);


buttons.forEach(function(button){
     button.addEventListener('click', function(e){
            const styles=e.currentTarget.classList;


        if (styles.contains("plus")){
            count++;
            samletantal++;
        }
        else if (styles.contains("minus")){
            if (count > 0) {
        count--;
        samletantal--;
    }
        }  
        else{
            samletantal -= count;
            count=0;
        }

        if (samletantal > 0) {
             bestillingsstatus.style.color = "green";
             bestillingsstatus.textContent = "Klar til bestilling";
        } else {
            bestillingsstatus.style.color = "red";
            bestillingsstatus.textContent = "Ikke klar til bestilling";
        }


        value.textContent=count; 
        vareantal.textContent = samletantal;

     });
});
});

