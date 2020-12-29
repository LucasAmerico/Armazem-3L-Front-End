import { Motorista } from '../utils/interfaces';
import api from './api';

const postMotoristaRoute = '/motorista';
const getMotoristaRoute = '/motorista/';
const loginRoute = '/motorista/login';
const recuperarMotoristaRoute = '/motorista/recuperar';

async function getMotorista(motoristaId: number) {
  const url = `${getMotoristaRoute}${motoristaId}`;

  const response = await api.get(url);
  return response.data;
}

async function postMotorista(motorista: Motorista) {
  const url = postMotoristaRoute;

  const response = await api.post(url, motorista);
  return response.data;
}

async function login(motorista: Motorista) {
  const url = loginRoute;

  const response = await api.post(url, motorista);
  return response.data;
}

async function recuperarMotorista(motorista: Motorista) {
  const url = recuperarMotoristaRoute;

  const response = await api.post(url, motorista);
  return response.data;
}

export default {
  getMotorista,
  postMotorista,
  login,
  recuperarMotorista,
};
