import api from './api';

const getCargaRoute = '/carga/listagem';

async function getCarga(id?: any, motorista?: any) {
  let url = getCargaRoute;

  if (id) {
    url = `${url}?id=${id}`;
  }

  if (motorista) {
    url = `${url}?id=${id}`;
  }

  const response = await api.get(url);
  return response.data;
}

export default {
  getCarga,
};
