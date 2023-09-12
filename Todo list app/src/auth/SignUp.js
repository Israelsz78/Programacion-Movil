import '../App.css'
function SignUp() {
    return (
      <>
      <div className="login-container">
      <img src="gatito.png" alt="Logo de la aplicación" className="logo" />
      <h1>Registro</h1>
      <form>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="contrasena-registro">Contraseña</label>
        <input type="password" id="contrasena-registro" name="contrasena-registro" required />

        <button type="submit">Registrarse</button>
      </form>
      <p className="login-link">
        ¿Ya tienes una cuenta? <a href="/login">Iniciar sesión</a>
      </p>
    </div>
      
      </>
      
    );
  }

  function validateForm() {
      var nameInput = document.getElementById("nameInput");
      var emailInput = document.getElementById("emailInput");
      var passwordInput = document.getElementById("passwordInput");

      var name = nameInput.value;
      var email = emailInput.value;
      var password = passwordInput.value;

      // Expresión regular para permitir solo letras (sin acentos)
      var lettersOnlyRegex = /^[A-Za-z]+$/;

      if (!lettersOnlyRegex.test(name)) {
          alert("Por favor, ingresa solo letras en el campo de Nombre.");
          nameInput.focus();
          return false;
      }

      // Expresión regular para validar direcciones de correo de Hotmail y Gmail
      var emailRegex = /^(?=.[@])(?=.(hotmail\.com|gmail\.com))[\w@.-]+$/;

      if (!emailRegex.test(email)) {
          alert("Por favor, ingresa una dirección de correo válida de Hotmail.com o Gmail.com.");
          emailInput.focus();
          return false;
      }

      if (!lettersOnlyRegex.test(password)) {
          alert("Por favor, ingresa solo letras en el campo de Contraseña.");
          passwordInput.focus();
          return false;
      }

      // Si la validación pasa, puedes enviar el formulario o realizar otras acciones aquí
      // En este ejemplo, simplemente se muestra una alerta
      alert("¡Formulario validado correctamente!");
  }

  
  
  export default SignUp;