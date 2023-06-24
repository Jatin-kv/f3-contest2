let userInfo=JSON.parse(localStorage.getItem('userInfo'));
const logoutBtn=document.getElementById('logout-btn');
window.addEventListener('load',loginCredentials)

function loginCredentials(){
    if(userInfo && userInfo.access_token){
        const fullName=document.getElementById('fullName');
        const email=document.getElementById('email');
        const password=document.getElementById('password');
        fullName.innerText=userInfo.fullName;
        email.innerText=userInfo.email;
        password.innerText=userInfo.password;
    }
    else{
        window.open('index.html','_self');

    }
}

logoutBtn.addEventListener('click',removeAccess);
function removeAccess(){
  console.log(userInfo);
  localStorage.removeItem('userInfo');
  window.open('index.html','_self');
}
