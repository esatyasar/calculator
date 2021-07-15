
const keys = document.querySelectorAll(".content");
const result = document.querySelector(".content12");

for(let i=0;i < keys.length;i++){
    if(keys[i].innerHTML === "="){
        keys[i].addEventListener("click", calculate);   
    }else{
        keys[i].addEventListener("click",addToCurrentValue(i))
    }
}

function addToCurrentValue(i){
    return () => {
        if(keys[i].innerHTML === "+"){
            result.innerHTML += "+"
        }else if (keys[i].innerHTML === "-"){
            result.innerHTML += "-"
        }else if (keys[i].innerHTML === "x"){
            result.innerHTML += "*"
        }else if (keys[i].innerHTML === "/"){
            result.innerHTML += "/"
        }else if (keys[i].innerHTML === "AC"){
            result.innerHTML = "0"
        }else if(keys[i].innerHTML === ","){
            result.innerHTML += "."
        }else if (keys[i].innerHTML === "+/-"){
            if(Math.sign(Number(result.value)) !== 0 ){
                result.innerHTML *= -1 
            }else{
                result.innerHTML ="0";
            }
        }else if(keys[i].innerHTML === "DEL"){
            result.innerHTML = String(result.innerHTML).slice(0,-1);
            if ((result.innerHTML).length === 0 ){
                result.innerHTML = "0"
            }
        } else{
            if(result.innerHTML === "0" || result.innerHTML === "infinite") {
                result.innerHTML = keys[i].innerHTML
            }else{
            result.innerHTML += keys[i].innerHTML
            }
        }
    }
}
function calculate(){
    if(result.innerHTML.includes("/0")){
        alert("Zero Divison Error")
        return result.innerHTML = "infinite"

    }else{
        return (result.innerHTML = eval(result.innerHTML));
    }
}






