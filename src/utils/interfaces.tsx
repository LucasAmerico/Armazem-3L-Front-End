export interface Produto {
  id: number;
  nome: string;
  peso: number;
  preco: number;
  qtd: number;
  qtdCarga: number;
}

export interface IPropsDataCarga {
  address?: string;
  freight?: string;
  onChangeValue?: any;
}

export interface HandleBooleans {
  prodState: boolean[];
  selectAll: boolean;
}

export interface IPropsListProducts {
  produtos: Produto[];
  prodState: boolean[];
  filtro: string;
  selectAll?: boolean;
  onSelectAllItens?: any;
  onUnselectAllItens?: any;
  onIfSelectAllTrue?: any;
  onChangeFilterValue: any;
  onSelectItem?: any;
  onChangeQtd?: any;
}

export interface ProdutoList {
  produtoId: any;
  qtd: any;
}

export interface Carga {
  endereco: string;
  frete: number;
  produtos: ProdutoList[];
}
