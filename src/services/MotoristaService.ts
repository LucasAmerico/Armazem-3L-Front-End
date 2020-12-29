import api from './api';

const loginRoute = '/motorista/login';

async function login(obj: any) {
  const url = loginRoute;

  const response = await api.post(url, obj);
  return response.data;
}

export default {
  login,
};
