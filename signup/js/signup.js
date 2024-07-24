var signupname=document.getElementById('signName');
var signupemail=document.getElementById('signEmail');
var signuppass=document.getElementById('signPassword');
var user=[];

if(localStorage.getItem('user')!=null){
    user=JSON.parse(localStorage.getItem('user'))
}
else{
    user=[];
}
function add(){
    if(signupname.value=='' || signupemail.value=='' || signuppass.value==''){
        document.getElementById('message').innerHTML=`<p class="text-center">All inputs are required</p>`


    }
    else{
        var obj={
            name:signupname.value,
            email:signupemail.value,
            pass:signuppass.value

        }
        user.push(obj);
        location.href="file:///D:/Route/Smartlogin%20JS/signin/signin.html"
        localStorage.setItem('user',JSON.stringify(user));
    }
}
