import { useApi, useForm, useSwal } from "@hooks";
import { useTranslation } from "react-i18next";
import {
  RegisterForm,
  RegisterResponse,
  RespondeGetDocumentType,
} from "./interface";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const useRegister = () => {
  const { onChange, form } = useForm<RegisterForm>({
    email: "",
    password: "",
    passwordConfirm: "",
    apellidos: "",
    direccion: "",
    nombres: "",
    numero_identificacion: "",
    numero_telefono: "",
    tipo_documento: "",
  });
  const [documentTypes, setDocumentTypes] = useState<string[]>([]);
  const { t: T, i18n } = useTranslation("global");
  const { loadApi } = useApi();
  const { toast } = useSwal();
  const history = useNavigate();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { estado } = await loadApi<RegisterResponse>({
        endpoint: "/usuarios/",
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

  const getDocumentType = async (controller: AbortController) => {
    try {
      const data = await loadApi<RespondeGetDocumentType>({
        type: "GET",
        endpoint: "/parametros/1",
        abortController: controller,
      });
      if (data.estado) {
        setDocumentTypes(data.parameter.valores);
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
    return T(`register.${value}`);
  };

  useEffect(() => {
    const controller = new AbortController();
    getDocumentType(controller);
    return () => {
      controller.abort();
    };
  }, []);

  return {
    onChangeLanguage,
    t,
    language: i18n.language,
    handleRegister,
    onChange,
    documentTypes,
    ...form,
  };
};

export default useRegister;
