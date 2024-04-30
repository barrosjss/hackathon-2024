export interface CreateNewPasswordForm {
  password: string;
  confirmPassword: string;
}

export interface CreateNewPasswordResponse {
  estado: boolean;
  msg: string;
}
