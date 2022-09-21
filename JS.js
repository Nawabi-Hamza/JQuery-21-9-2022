// const btn =document.getElementById('btn')
// btn.addEventListener('click' , load)

// function load(){
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET' , 'ajax.text')
//     xhr.onload = function(){
//         document.getElementById('new').innerHTML=(this.response)
//     }
//     xhr.send()
// }

// function load(){
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET' , 'ajax.text')
//     xhr.onload = function(){
//         document.write(this.response)
//     }
//     xhr.send()
// }

// document.getElementById('submitForm').addEventListener('submit' , loadEmail)
// function loadEmail(e){
//     e.preventDefault();
//     // alert("hellow")
//     var email = document.getElementById('email').value
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET' , 'sub.php?email='+email)
//     xhr.onload = function(){
//         console.log(this.response)
        
//     }
//     xhr.send();
// }

document.getElementById('submitForm').addEventListener('submit' , storeSubEmails);
function storeSubEmails(e){
    e.preventDefault();
    const email = document.getElementById('email').value
    var params = "email=" +email
   const xhr = new XMLHttpRequest() 
   xhr.open('POST' , 'sub.php')
   xhr.setRequestHeader('Content-type'  , 'application/x-www-form-urlencoded')
    xhr.onload= function(){
        console.log(this.response)
    }
    xhr.send(params);
}
 

// ========================================= show email 
var plc = document.getElementById('demo');
var out = '';

function bringData(){

    const xhr = new XMLHttpRequest()
    xhr.open('GET' , 'show.php')

    xhr.onload = function(){
        console.log(this.response);
        var data = JSON.parse(this.response);
        console.log(data)
        for(let key in data){
            out += data[key].email + "</br>"
            plc.innerHTML=out;
        }

    }
    xhr.send()
}