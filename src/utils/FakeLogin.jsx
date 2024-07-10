const FakeLogin = (username, password) => {
    if (username === 'usuario' && password === 'senha') {
      return { success: true, message: 'Login bem-sucedido!' };
    } else {
      return { success: false, message: 'Credenciais inválidas.' };
    }
  };
  
  export default FakeLogin;