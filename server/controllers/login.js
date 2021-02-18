const authenticator = require('../auth/authenticator');

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(401)
        .json({ message: 'É necessário usuário e senha para fazer login' });
      }
    const user = await authenticator(email);
    if (!user || user.password !== password) return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });
    res.send({ response: 'logou' });
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
}