import path from '../services/Path';

const validateUser = async (setValidate) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    const URL = `${path}/validateUser`;
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      },
    });
    console.log(response.status)
    setValidate(response.status === 200)
    return response.status === 200;
  }

  return false
}

export default validateUser;