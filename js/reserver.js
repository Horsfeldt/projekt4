const madvarer = document.querySelectorAll(
    ".madvarer1, .madvarer2, .madvarer3, .madvarer4"
);

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
        }
        else if (styles.contains("minus")){
            count--;
        }  
        else{
            count=0;
        }

        value.textContent=count; 

     });
});
});