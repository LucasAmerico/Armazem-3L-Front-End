import api from './api';

const getCargaRoute = '/carga';

async function getCarga(id?: any, motorista?: any) {
  let url = `${getCargaRoute}/listagem`;
  if (id) {
    url = `${url}?id=${id}`;
  }
  if (motorista) {
    url = `${url}?motorista=${motorista}`;
  }
  const response = await api.get(url);

  return response.data;
}
export default {
  getCarga,
};
