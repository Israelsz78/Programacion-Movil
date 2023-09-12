import "./ChangePass.css";
function ChangePass() {
    return (
      <>
      <div className="reset-password-container">
      <img src="gatito.png" alt="Logo de la aplicación" className="logo" />
      <h1>Restablecer Contraseña</h1>
      <form>
        <label htmlFor="password">Contraseña Actual</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="new-password">Nueva Contraseña</label>
        <input type="password" id="new-password" name="new-password" required />

        <label htmlFor="confirm-password">Confirmar Nueva Contraseña</label>
        <input type="password" id="confirm-password" name="confirm-password" required />

        <button type="submit">Reset</button>
      </form>
    </div>
      </>
    );
  }
  
  export default ChangePass;