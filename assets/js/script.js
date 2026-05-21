function openLogin(){
    document.getElementById('loginModal').style.display = 'block';
}

function closeLogin(){
    document.getElementById('loginModal').style.display = 'none';
}

function demoLogin(){
    alert('Demo Login Successful!');
    closeLogin();
}

function startFeature(feature){
    alert(feature + ' feature started successfully! (Prototype Demo)');
}

window.onclick = function(event){
    let modal = document.getElementById('loginModal');

    if(event.target == modal){
        closeLogin();
    }
}