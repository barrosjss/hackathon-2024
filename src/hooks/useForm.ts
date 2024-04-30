import { useState } from "react";

export const useForm = <T extends object>(initState: T) => {
  const [state, setState] = useState<T>(initState);

  const getBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();

        reader.onload = () => {
          resolve(reader.result);
        };

        reader.readAsDataURL(file);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

  const onChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    key: keyof T,
    file: boolean = false,
    arrayFiles: boolean = false
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      (async () => {
        if (!file) {
          const { value } = target;
          setState({
            ...state,
            [key]: value,
          });
          return resolve("Cambios guardados con Exito!");
        }

        if (arrayFiles) {
          const { files } = target;
          if (!files) {
            return reject("Debe Seleccionar los archivos a cargar.");
          }
          const values = Array.from(files);
          const listFiles = await Promise.all(
            values.map(async (file: File) => {
              const base64String = await getBase64(file);
              return {
                file: base64String,
                url: URL.createObjectURL(file),
                name: file.name,
              };
            })
          );
          const value = state[key] as unknown[];
          if (value.length > 0) {
            setState({
              ...state,
              [key]: [...value, ...listFiles],
            });
          } else {
            setState({ ...state, [key]: listFiles });
          }
          return resolve("Archivos cargados con exito!");
        }

        if (file) {
          const { files } = target;
          if (!files) {
            return reject("Debe Seleccionar un archivo");
          }
          setState({
            ...state,
            [key]: {
              file: await getBase64(files[0]),
              url: URL.createObjectURL(files[0]),
              name: files[0].name,
            },
          });
          return resolve("Archivo cargado con exito!");
        }
      })();
    });
  };

  const setForm = (form: T) => {
    setState({
      ...state,
      ...form,
    });
  };

  const resetForm = () => {
    setForm(initState);
  };

  return {
    ...state,
    form: state,
    onChange,
    setForm,
    resetForm,
    getBase64,
  };
};

export default useForm;
