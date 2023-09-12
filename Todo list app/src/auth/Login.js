import "./Login.css";


function Login() {
    return (
      <div className="login-container">
        <img src="gatito.png" alt="Logo de la aplicación" className="logo" />
      <h1>Iniciar sesión</h1>
      <form>
        <label htmlFor="usuario">Usuario</label>
        <input type="text" id="usuario" name="usuario" required />

        <label htmlFor="contrasena">Contraseña</label>
        <input type="password" id="contrasena" name="contrasena" required />

        <button type="submit">Iniciar sesión</button>
      </form>
      <p className="forgot-password">
         <a href="/reset-password">¿Olvidaste tu contraseña?</a>
        </p>
    </div>
  );
  }
  
  
  export default Login;