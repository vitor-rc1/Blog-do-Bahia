const findUser = require('../models/findUser');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(401)
        .json({ message: 'É necessário usuário e senha para fazer login' });
      }

    const user = await findUser(email);

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });
    }

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: user.email }, user.secret, jwtConfig)

    res.status(200).send({ token });
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
}