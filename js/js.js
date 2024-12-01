function check(){
    const pin = document.getElementById('pin').value;
    if(pin === "1234"){
        window.location.href = 'home.html'  
    }
    else{
        alert("Please enter the right ")
    }
}

function cashIn(){
    document.getElementById('cash-in-sec').classList.remove('hidden')
    document.getElementById('cash-out-sec').classList.add('hidden')
}

function cashOut(){
    document.getElementById('cash-out-sec').classList.remove('hidden')
    document.getElementById('cash-in-sec').classList.add('hidden')
}





















































































