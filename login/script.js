let form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const user = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    let audio = new Audio("../assets/sound/ringtones-zelda-1.mp3")

    if(user === "admin" && senha === "admin"){
        audio.play().then( ()=>{

            audio.onended= ()=>{
                window.location.href = "../home/index.html";
            }

        });
    }
    else{
        alert("Acesso negado!")
    }
});

