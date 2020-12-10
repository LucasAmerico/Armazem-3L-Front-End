export interface Produto {
  id?: number;
  nome: string;
  peso: number;
  preco: number;
  qtd: number;
  qtdCarga?: number;
}

export interface IPropsDataCarga {
  address: string | undefined;
  freight: string | undefined;
  onChangeValue: any;
  disabled: boolean;
}

export interface IPropsItemLista {
  titulo: string;
  id: number;
}

export interface ITabItems {
  value: number;
}

export interface IPropsDialog {
  open: boolean;
  id: number;
}

export interface IDetalhes {
  open: boolean;
  id: number;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
  style: any;
}

export interface IPropsAccCarga {
  open: boolean;
  onClose: any;
  onDelete: any;
}

export interface IPropsRecCarga {
  open: boolean;
  onClose: any;
  onDelete: any;
}

export interface IPropsRmProduto {
  id: number;
  nome: string | undefined;
  open: boolean;
  onClose: any;
  onDelete: any;
}

export interface IPropsDetalhesProduto {
  produto: Produto | undefined;
  openM: boolean;
  onClose: any;
}

export interface IPropsDetalhesCarga {
  carga: Carga | undefined;
  openM: boolean;
  onClose: any;
}

export interface IPropsFormProduct {
  name?: string;
  weight?: string;
  price?: string;
  qtd?: string;
  disabled: boolean;
  onChangeValue?: any;
}

export interface IPropsCadastroCarga {
  modal: boolean;
  onClose: any;
}

export interface IPropsCadastroProduto {
  modal: boolean;
  onClose: any;
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
  id?: number;
  endereco: string;
  frete: number;
  motoristaId: number;
  produtos: ProdutoList[];
}

export interface CargaMotorista {
  cargaId: number;
  motoristaId: number;
}
