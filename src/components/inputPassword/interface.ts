import { InputText } from "types/general";

export interface InputPasswordProps {
  label: string;
  value: unknown;
  onChange: (e: InputText) => void;
}
