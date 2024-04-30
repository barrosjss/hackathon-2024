import { useApi, useForm, useSwal } from "@hooks";
import { useTranslation } from "react-i18next";
import { CreateNewPasswordForm, CreateNewPasswordResponse } from "./interface";
import { useNavigate } from "react-router-dom";

const useCreateNewPassword = () => {
  const { onChange, form } = useForm<CreateNewPasswordForm>({
    password: "",
    confirmPassword: "",
  });
  const { t: T, i18n } = useTranslation("global");
  const { loadApi } = useApi();
  const { toast } = useSwal();
  const history = useNavigate();

  const handleRecoverAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { estado } = await loadApi<CreateNewPasswordResponse>({
        endpoint: "/usuarios/recover-account", // cambiar
        type: "POST",
        body: form,
      });
      if (estado) {
        history("/auth/login");
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

  const t = (value: string, general = false) => {
    if (general) {
      return T(value);
    }
    return T(`createNewPassword.${value}`);
  };

  return {
    onChangeLanguage,
    t,
    language: i18n.language,
    handleRecoverAccount,
    onChange,
    ...form,
  };
};

export default useCreateNewPassword;
