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

export const newPost = async (post) => {
  const URL = `${path}/post/create`;
  await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
}

export const updatePost = async (post) => {
  const URL = `${path}/post/update/${post.id}`;
  await fetch(URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
}
