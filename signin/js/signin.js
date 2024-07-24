var user=[];
user=JSON.parse(localStorage.getItem('user'));
var signEmail=document.getElementById("signEmail");
var signPassword=document.getElementById("signPassword");
document.getElementById('login').addEventListener('click',function(){
    if(signEmail.value=='' || signPassword.value==''){
        document.getElementById('message').innerHTML=`<p class="text-center">All inputs are required</p>`
    }
    else{
            checkuser();
        }
    }
)
function checkuser(){
    for(var i=0;i<user.length;i++){
        if(signEmail.value==user[i].email && signPassword.value==user[i].pass){
            var y=user[i].name;
            localStorage.setItem('username',y);
            location.href='file:///D:/Route/Smartlogin%20JS/Home/home.html';
            break;
        }
    }
}