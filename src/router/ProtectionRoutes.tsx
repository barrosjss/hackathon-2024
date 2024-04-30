import { Navigate } from "react-router-dom";
import { useUserStore } from "@stores";
import { PropsComponen } from "types/general";
import { useEffect } from "react";
import { useApi, useSwal } from "@hooks";
import { SingInResponde } from "pages/auth/login/interface";

export const PublicRoute = ({ children }: PropsComponen) => {
  const logged = useUserStore((state) => Boolean(state.token));
  return !logged ? children : <Navigate to="/dashboard" />;
};

export const PrivateRoute = ({ children }: PropsComponen) => {
  const logged = useUserStore((state) => Boolean(state.token));
  const auth = useUserStore((state) => state.auth);
  const logOut = useUserStore((state) => state.logOut);
  const { loadApi } = useApi();
  const { toast } = useSwal();

  useEffect(() => {
    const controller = new AbortController();
    const authReq = async () => {
      try {
        if (!logged) {
          return;
        }
        const { data, estado } = await loadApi<SingInResponde>({
          endpoint: "/sesiones/validar-sesion",
          type: "GET",
          abortController: controller,
          token: true,
        });
        if (estado) {
          auth(data);
        }
      } catch (error) {
        if (error instanceof Error) {
          toast({ icon: "error", text: "Sesion Expirada.", timer: 3000 });
        }
        logOut();
      }
    };
    authReq();
    return () => {
      controller.abort();
    };
  }, []);
  return logged ? children : <Navigate to="/auth/login" />;
};
