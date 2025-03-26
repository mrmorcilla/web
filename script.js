const API_URL = "https://67e34baf97fc65f535393e43.mockapi.io/loginitems/users";

// Registrar usuario
function registrar() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => alert("Usuario registrado con ID: " + data.id))
    .catch(error => console.error("Error al registrar:", error));
}

// Iniciar sesión
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    fetch(API_URL)
        .then(response => response.json())
        .then(users => {
            let user = users.find(u => u.email === email && u.password === password);
            if (user) {
                alert("Inicio de sesión exitoso");
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        })
        .catch(error => console.error("Error al iniciar sesión:", error));
}
