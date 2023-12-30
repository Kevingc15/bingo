const loginController = (req, res) => {
    // Lógica de autenticación
    const { username, password } = req.body;
  
    // Verifica las credenciales y genera un token si son válidas
    // ...
  
    // Envía la respuesta al frontend
    res.json({ token: 'token_de_autenticacion' });
  };
  
  module.exports = {
    loginController,
  };
  