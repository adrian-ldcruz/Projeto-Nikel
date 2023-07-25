const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

//LOGAR NO SISTEMA

checkLogged();

document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault();
    
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checkSession = document.getElementById("session-check").checked;

    const account = getAccount(email);

    if(!account) {
        alert("Verifique o usuário ou senha.");
        return;
    }

    if(account) {
        if(account.password !== password){
            alert("Verifique o usuário ou senha.");
            return;
        }

        saveSession(email, checkSession);

        window.location.href = "home.html";
    }
    
});

//CRIAR A CONTA DO USUÁRIO

document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();
    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;

    if(email.length < 5){
        alert("Preencha o campo com um e-mail válido.");
        return;
    }
    if(password.length < 6){
        alert("Escolha uma senha com pelo menos 6 caracteres.");
        return;
    }

    saveAccount({
        login: email,
        password: password,
        transactions: []
    });

    myModal.hide(); 
    alert("Conta criada com sucesso.");
});

function checkLogged() {
    if(session) {
        sessionStorage.setItem("logged", session); //O valor de session é o usuário que fica no Local Storage

        logged = session;
    }

    if(logged) {
        saveSession(logged, session);

        window.location.href = "home.html";
    }
}

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, saveSession) {
    if(saveSession){
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logged", data);
}

function getAccount(key) {
    const account = localStorage.getItem(key);

    if(account) {
        return JSON.parse(account);
    }

    return "";
}

