function ForgotPass() {
    return (
      <>
      <div className="login-container">
      <img src="gatito.png" alt="Logo de la aplicación" className="logo" />
      <h1>¿Olvidaste tu contraseña?</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <button type="submit">Enviar</button>
      </form>
      <p className="login-link">
        ¿Recuerdas tu contraseña? <a href="/login">Iniciar sesión</a>
      </p>
    </div>
      </>
    );
  }
  
  export default ForgotPass;