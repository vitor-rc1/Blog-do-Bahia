const express = require('express');
var cors = require('cors');
const Router = require('express-promise-router');
const validateJWT = require('./auth/validateJWT');

const app = express();
const port = 3002;
const router = new Router();

app.use(express.json())
app.use(cors())
app.use(router)

const {
  login,
  newPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  newSection,
  getSections,
  getSection,
  updateSection,
  deleteSection,
} = require('./routes');

// LOGIN
router.post('/login', login);

//POSTS
router.post('/post/create', newPost);
router.get('/posts', getPosts);
router.get('/post/load/:id', validateJWT, getPost);
router.put('/post/update/:id', updatePost);
router.delete('/post/delete/:id', deletePost);

//SECTIONS
router.post('/section/create', newSection);
router.get('/sections', getSections);
router.get('/section/load/:id', getSection);
router.put('/section/update/:id', updateSection);
router.delete('/section/delete/:id', deleteSection);

app.listen(port, () => {
  console.log("Ta rodando o menino");
});