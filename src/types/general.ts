export type InputText = React.ChangeEvent<HTMLInputElement>;

export interface User {
  nombres: string;
  apellidos: string;
  numero_telefono: string;
  email: string;
  foto: null;
  direccion: null;
  numero_identificacion: string;
  tipo_documento: string;
}

export interface Permiso {
  id: number;
  estado: number;
  id_grupo_usuario: number;
  id_modulo_accion: number;
  GrupoUsuario: GrupoUsuario;
  ModuloAccion: ModuloAccion;
}

export interface GrupoUsuario {
  id: number;
  nombre: string;
  estado: number;
}

export interface ModuloAccion {
  id: number;
  estado: number;
  id_accion: number;
  id_modulo: number;
  Modulo: Modulo;
  Accion: Accion;
}

export interface Accion {
  nombre: string;
  id: number;
}

export interface Modulo {
  nombre: string;
  id: number;
}

export type PropsComponen = {
  children: JSX.Element | JSX.Element[];
};
