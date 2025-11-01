let Choice=document.querySelectorAll('.choice');
let list =["Spider",'House',"Ghost"];
Choice.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        let userChoice=choice.getAttribute('id');
        console.log(`User Choice Is ${userChoice}`);
        let compChoice= list[Math.floor(Math.random()*3)];
        console.log(`Comp Choice Is ${compChoice}`);
        playgame(userChoice,compChoice);
    })
})
function playgame(userChoice,compChoice){
    let mssg=document.querySelector('#mssg');
    let user=document.querySelector('#userScore');
    let comp=document.querySelector('#compScore');
    let bg=document.querySelector('.parameter');
    if (userChoice===compChoice){
        mssg.textContent=`Its a Draw!!`;
        bg.style.backgroundColor='lightgreen';

    }else if(userChoice=='Ghost' && compChoice=='House' || userChoice=='Spider' && compChoice=='Ghost' || userChoice=='House' && compChoice=='Spider'){
        user.textContent=Number(user.textContent)+1;
        bg.style.backgroundColor='lightskyblue';
        mssg.textContent='User Wins!!Comp Lost.';
    }else{
        comp.textContent=Number(comp.textContent)+1;
        bg.style.backgroundColor='Red';
        mssg.textContent='Comp Wins!! User Lost.';
    }
    let button=document.querySelector('button');
    button.onclick=()=>{
        user.textContent=0;
        comp.textContent=0;
        mssg.textContent='Play Your Move!!';
        bg.style.backgroundColor='';
    }
}
