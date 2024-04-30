export interface RegisterForm {
  apellidos: string;
  direccion: string;
  email: string;
  tipo_documento: string;
  nombres: string;
  numero_identificacion: string;
  numero_telefono?: string | null;
  password: string;
  passwordConfirm: string;
}

export interface RegisterResponse {
  estado: boolean;
  usuario: Usuario;
}

interface Usuario {
  estado: boolean;
  id: number;
  apellidos: string;
  direccion: string;
  email: string;
  tipo_documento: string;
  nombres: string;
  numero_identificacion: string;
  numero_telefono: string;
  password: string;
  id_grupo_usuario: number;
  updating: string;
  creating: string;
}

export interface RespondeGetDocumentType {
  estado: boolean;
  parameter: Parameter;
}

export interface Parameter {
  id: number;
  nombreParametro: string;
  valores: string[];
  estado: number;
}
