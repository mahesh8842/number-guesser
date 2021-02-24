let min=1,
    max=20,
    attemptsleft=3,
    winningnum=randnum(min,max),
    isattempted=false;

const button=document.querySelector('.btn'),
nimnum=document.querySelector('.number-start'),
maxnum=document.querySelector('.number-last'),
input=document.querySelector('.form-control'),
message=document.querySelector('.result'),
alert=document.querySelector('.alert');

button.addEventListener('click',startgame);

function startgame(){
    // console.log(typeof(input.value));
    val=parseInt(input.value);
    if(isNaN() || val<min || val>max){
        setmessage(`please enter a number in between ${min} - ${max}`,'lightred')
    }
    if(val===winningnum){
        gameover(true,'yay! you guessed the number');
    }else{
        attemptsleft-=1;
        if(attemptsleft===0){
            gameover(false,`Game over !!, the number was ${winningnum}`)
        }else{
            //game cont -answer wrong
            input.value='';
            setmessage(`${val} is not correct !! , you have ${attemptsleft} attempts left`,'lihtred');
        }
    }
    alert.style.display='block';
}
function setmessage(msg,color){
    message.textContent=msg;
    alert.style.backgroundColor=color;
}

function gameover(won,msg){
    let color=won?'lightgreen':'lightred';
    input.disabled=true;
    // input.style.borderColor='green';
    input.style.border=`2px solid ${color} `;
    setmessage(msg,color);
    button.textContent='Play Again';
    button.addEventListener('click',e=>{
        window.location.reload();
    })
}
function randnum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);

}