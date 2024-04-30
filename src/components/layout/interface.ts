import { PropsComponen } from "types/general";

export interface PropsLayoutHome extends PropsComponen {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
  onChangeLanguage: (value: string) => void;
  language: string;
  backButton?: boolean;
  t?: (value: string, general?: boolean) => string;
}
