import { Motorista, RecuperarSenhaDados } from '../utils/interfaces';
import api from './api';

const postMotoristaRoute = '/motorista';
const getMotoristaRoute = '/motorista/';
const loginRoute = '/motorista/login';
const postVerificarMotoristaRoute = '/motorista/verificar';
const putRecuperarSenhaMotoristaRoute = '/motorista/recuperar';

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

async function postVerificarMotorista(content: RecuperarSenhaDados) {
  const url = postVerificarMotoristaRoute;

  const response = await api.post(url, content);
  return response.data;
}

async function login(motorista: Motorista) {
  const url = loginRoute;

  const response = await api.post(url, motorista);
  return response.data;
}

async function putRecuperarSenhaMotorista(content: RecuperarSenhaDados) {
  const url = putRecuperarSenhaMotoristaRoute;

  const response = await api.put(url, content);
  return response.data;
}

export default {
  getMotorista,
  postMotorista,
  login,
  postVerificarMotorista,
  putRecuperarSenhaMotorista,
};
