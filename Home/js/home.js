document.getElementById('username').innerHTML=localStorage.getItem('username');
document.getElementById("logBtn").addEventListener('click',function(){
    localStorage.removeItem('username')
})