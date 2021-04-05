import path from './Path';

//posts
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
  const token = sessionStorage.getItem('token');
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': token
    },
    body: JSON.stringify(post),
  });
  return response;
}

export const updatePost = async (post) => {
  const URL = `${path}/post/update/${post.id}`;
  const token = sessionStorage.getItem('token');
  const response = await fetch(URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'authorization': token
    },
    body: JSON.stringify(post),
  });
  return response;
}

export const deletePost = async (id) => {
  const URL = `${path}/post/delete/${id}`;
  const token = sessionStorage.getItem('token');
  console.log(id)
  const response = await fetch(URL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'authorization': token
    },
  });
  return response;
}

//sections
export const getSections = async () => {
  const URL = `${path}/sections`;
  const response = await fetch(URL);
  return await response.json();
}

export const getSection = async (idSection) => {
    const URL = `${path}/section/load/${idSection}`;
    const response = await fetch(URL);
    return await response.json();
}

export const newSection = async (section) => {
  const URL = `${path}/section/create`;
  const token = sessionStorage.getItem('token');
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': token
    },
    body: JSON.stringify(section),
  });
  return response;
}

export const updateSection = async (section) => {
  const URL = `${path}/section/update/${section.id}`;
  const token = sessionStorage.getItem('token');
  const response = await fetch(URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'authorization': token
    },
    body: JSON.stringify(section),
  });

  return response;
}

export const deleteSection = async (id) => {
  const URL = `${path}/section/delete/${id}`;
  const token = sessionStorage.getItem('token');
  console.log(id)
  const response = await fetch(URL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'authorization': token
    },
  });
  return response;
}

// map
export const getMap = async () => {
  const URL = `${path}/map`;
  const response = await fetch(URL);
  return await response.json();
}

export const updateMap = async (positions) => {
  const URL = `${path}/map/update`;
  const token = sessionStorage.getItem('token');
  const response = await fetch(URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'authorization': token
    },
    body: JSON.stringify({positions}),
  });

  return response;
}

// autentication
export const auth = async (user) => {
  const URL = `${path}/login`;
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response.json();
}

