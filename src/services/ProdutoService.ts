import { Produto } from '../utils/interfaces';
import api from './api';

const getProdutoRoute = '/produto/listagem';
const postProdutoRoute = '/produto';
const deleteProdutoRoute = '/produto/';

async function getProdutos() {
  const url = getProdutoRoute;

  const response = await api.get(url);
  return response.data;
}

async function postProduto(produto: Produto) {
  const url = postProdutoRoute;

  const response = await api.post(url, produto);
  return response.data;
}

async function deleteProduto(id: number) {
  const url = `${deleteProdutoRoute}${id}`;

  const response = await api.delete(url);
  return response.data;
}

export default {
  getProdutos,
  postProduto,
  deleteProduto,
};
