import { KeyboardEvent } from "react";

const keysOnlyNumbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "Backspace",
  "Enter",
];
export const onlyNumbers = (e: KeyboardEvent<HTMLDivElement>) => {
  if (!keysOnlyNumbers.includes(e.key)) {
    e.preventDefault();
  }
};
