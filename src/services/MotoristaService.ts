import api from './api';
import { RecuperarSenha } from '../utils/interfaces';

const postVerificarMotoristaRoute = '/motorista/verificar';
const putRecuperarSenhaMotoristaRoute = '/motorista/recuperar';

async function postVerificarMotorista(content: RecuperarSenha) {
  const url = postVerificarMotoristaRoute;

  const response = await api.post(url, content);
  return response.data;
}
async function putRecuperarSenhaMotorista(content: RecuperarSenha) {
  const url = putRecuperarSenhaMotoristaRoute;

  const response = await api.put(url, content);
  return response.data;
}

export default {
  postVerificarMotorista,
  putRecuperarSenhaMotorista,
};
