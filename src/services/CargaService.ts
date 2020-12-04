import api from './api';

const getCargaRoute = '/carga';

async function getCarga(id?: any, motorista?: any) {
  let url = `${getCargaRoute}/listagem`;

  if (id) {
    url = `${url}?id=${id}`;
  }

  if (motorista) {
    url = `${url}?id=${id}`;
  }
  console.log(url);
  const response = await api.get(url);
  return response.data;
}

async function deleteCarga(id: any) {
  console.log(getCargaRoute);
  let url = getCargaRoute;
  url = `${url}/${id}`;

  const response = await api.delete(url);
  return response.data;
}

export default {
  getCarga,
  deleteCarga,
};
