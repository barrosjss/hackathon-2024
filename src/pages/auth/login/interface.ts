import { Permiso, User } from "types/general";

export interface SingInResponde {
  estado: boolean;
  data: DataSingIn;
}

export interface DataSingIn {
  user: User;
  token: string;
  permisos: Permiso[];
}

export interface LoginForm {
  email: string;
  password: string;
}
