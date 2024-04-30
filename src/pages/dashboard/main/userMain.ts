import { useUserStore } from "@stores";

export const useMain = () => {
  const logOut = useUserStore((state) => state.logOut);
  return {
    logOut,
  };
};
