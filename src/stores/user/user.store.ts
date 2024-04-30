import { localStorageAPI } from "../storages/";
import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { AccessAction, Action, SignInProps, State } from "./user.interface";
import { immer } from "zustand/middleware/immer";
import { User } from "types/general";

const initialState: State = {
  permisos: null,
  token: null,
  user: null,
};

const storeAPI: StateCreator<State & Action, [["zustand/devtools", never]]> = (
  set,
  get
) => ({
  ...initialState,
  signIn: (data: SignInProps) => set(() => data, false, "signIn"),
  logOut: () => set(() => initialState, false, "logOut"),
  auth: (data: SignInProps) => set(() => data, false, "auth"),
  updateUser: (user: User) => set(() => ({ user }), false, "updateUser"),
  getAccessAction: ({ action, module }: AccessAction) =>
    (get().permisos || [])
      .filter((data) => data.ModuloAccion.id_modulo === module)
      .map((item) => item.ModuloAccion.id_accion)
      .includes(action),
  getAccessByModule: (module: number) =>
    (get().permisos || [])
      .filter((data) => data.ModuloAccion.id_modulo === module)
      .map((item) => item.ModuloAccion.id_accion),
});

//para ver como funciona

export const useUserStore = create<State & Action>()(
  devtools(
    persist(immer(storeAPI), {
      skipHydration: true,
      name: "data",
      storage: localStorageAPI,
    })
  )
);
