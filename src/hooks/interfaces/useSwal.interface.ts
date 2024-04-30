import { SweetAlertIcon, SweetAlertOptions } from "sweetalert2";

export interface SwalCallbackFunctions {
  callbackConfirmed?: () => unknown;
  callbackDenied?: () => unknown;
  callbackCancel?: () => unknown;
}

export type SweetAlertOptionsC = SweetAlertOptions & {
  icon: SweetAlertIcon;
};
