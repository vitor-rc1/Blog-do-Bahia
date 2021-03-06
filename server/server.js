process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const express = require('express');
var cors = require('cors');
const Router = require('express-promise-router');
const validateJWT = require('./auth/validateJWT');
const app = express();
const port = process.env.PORT || 5000;
const router = new Router();

app.use(express.json())
app.use(cors())
app.use(router)

const {
  login,
  validateUser,
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
  getMap,
  updateMap,
} = require('./routes');

// LOGIN
router.post('/login', login);
router.post('/validateUser', validateJWT, validateUser);

// POSTS
router.post('/post/create', validateJWT, newPost);
router.get('/posts', getPosts);
router.get('/post/load/:id', getPost);
router.put('/post/update/:id', validateJWT, updatePost);
router.delete('/post/delete/:id', validateJWT, deletePost);

// SECTIONS
router.post('/section/create', validateJWT, newSection);
router.get('/sections', getSections);
router.get('/section/load/:id', getSection);
router.put('/section/update/:id', validateJWT, updateSection);
router.delete('/section/delete/:id', validateJWT, deleteSection);

// MAP
router.get('/map', getMap);
router.put('/map/update', validateJWT, updateMap);

app.listen(port, () => {
  console.log("Ta rodando o menino");
});