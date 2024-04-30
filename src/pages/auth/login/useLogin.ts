import { useApi, useForm, useSwal } from "@hooks";
import { useUserStore } from "@stores";
import { LoginForm, SingInResponde } from "./interface";
import { useTranslation } from "react-i18next";

const useLogin = () => {
  const { onChange, form } = useForm<LoginForm>({
    email: "",
    password: "",
  });
  const { t: T, i18n } = useTranslation("global");
  const { loadApi } = useApi();
  const { toast } = useSwal();
  const signIn = useUserStore((state) => state.signIn);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data, estado } = await loadApi<SingInResponde>({
        endpoint: "/usuarios/signin",
        type: "POST",
        body: form,
      });
      if (estado) {
        signIn(data);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast({ icon: "error", text: error.message, timer: 3000 });
      }
    }
  };

  const onChangeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  const t = (value: string) => {
    return T(`login.${value}`);
  };

  return {
    onChangeLanguage,
    t,
    language: i18n.language,
    handleLogin,
    onChange,
    ...form,
  };
};

export default useLogin;
