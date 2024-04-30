import { Permiso, User } from "types/general";

export interface SignInProps {
  user: User;
  token: string;
  permisos: Permiso[];
}

export interface AccessAction {
  module: number;
  action: number;
}

export interface State {
  user: User | null;
  token: string | null;
  permisos: Permiso[] | null;
}

export interface Action {
  signIn: (props: SignInProps) => void;
  logOut: () => void;
  auth: (data: SignInProps) => void;
  getAccessAction: (props: AccessAction) => boolean;
  getAccessByModule: (module: number) => number[];
}
