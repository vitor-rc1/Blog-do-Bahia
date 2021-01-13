const path = 'http://localhost:3002';

export const getPosts = async () => {
  const URL = `${path}/posts`;
  const response = await fetch(URL);
  return await response.json();
}

export const getPost = async (idPost) => {
    const URL = `${path}/post/load/${idPost}`;
    const response = await fetch(URL);
    return await response.json();
}