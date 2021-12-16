let screen = document.getElementById("screen");
let buttons = Array.from(document.querySelectorAll("button"));
buttons.map( button => {
    button.addEventListener('click' , (e) =>{
        switch(e.target.innerText){
            case 'C':
                screen.value = '';
                break;
            case '=' :
                try{
                    screen.value = eval(screen.value);
                }catch {
                    screen.value = "ERROR";
                }
                break;
            case '←' :
                screen.value = screen.value.slice(0,-1);
                break;
            default :
            screen.value += e.target.innerText;
        }
    });
});