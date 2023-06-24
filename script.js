
let signupBtn=document.getElementById('signup-btn');
let alertDiv=document.querySelector('.alert-message');
let alertMessage=document.createElement('p');
let userInfo={};

window.addEventListener('load',()=>{
    const userCredentails=JSON.parse(localStorage.getItem('userInfo'));
    if(userCredentails && userCredentails.access_token){
        window.open('profile.html','_self');
    }
})

signupBtn.addEventListener('click',(event)=>{
     event.preventDefault();
     console.log("signup function called ...");
    let inputs=document.getElementsByTagName('input');

    let fullName=inputs[0].value;
    let email=inputs[1].value;
    let password=inputs[2].value;
    let confirmPassword=inputs[3].value;
    alertDiv.innerHTML="";
    if(fullName && email && password && confirmPassword){
        if( password===confirmPassword){
        console.log('Successfully Signed Up!');
        alertMessage.innerText='Successfully Signed Up!';
        alertMessage.className='success';
        alertDiv.append(alertMessage);
        userInfo={
            fullName:fullName,
            email:email,
            password:password,
            access_token:genrateRandomToken()
        }
        navigateToProfilePage();
        }
        else {
        console.log('please enter same password ');
        alertMessage.innerText='please enter same password!';
        alertMessage.className='error';
        alertDiv.append(alertMessage);
        }
    }
    else {
        console.log('Error : All the fields are mandatory');
        alertMessage.innerText='Error : All the fields are mandatory';
        alertMessage.className='error';
        alertDiv.append(alertMessage);
    }
})
function genrateRandomToken(){
    const Strings='@#$ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    let randomToken='';
    for(let i=1;i<=16;i++){
        randomToken +=Strings[Math.floor(Math.random()*17)];
    }
    return randomToken;
}

function navigateToProfilePage(){
    localStorage.setItem('userInfo',JSON.stringify(userInfo));
     window.open('profile.html','_self');
}


