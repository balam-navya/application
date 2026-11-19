const email=document.getElementById('email')
const password =document.getElementById('password')
const form=document.getElementById('form')



if(email!=" " && password!=" "){
    alert("login successfull");
    window.location.href='index.html';
}
else{
    alert('please fill details');
}