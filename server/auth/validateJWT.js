const jwt = require('jsonwebtoken');
const findUser = require('../models/findUser');
const { secret } = require('../secret')

module.exports = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(400).json({ error: 'Token não encontrado ou informado' });
  }
  // const decoded = jwt.verify(token, secret);

  try {
    const decoded = jwt.verify(token, secret);
    console.log(decoded)
    const user = await findUser(decoded.data);
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }
    next();
  } catch {
    return res.status(401).json({ message: 'Erro: Seu token é inválido' });
  }
}