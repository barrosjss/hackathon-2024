import { useLayoutEffect } from "react";
import { AppTheme } from "@theme";
import { AppRouter } from "@router";
import { useUserStore } from "@stores";
import "./styles.css";

function App() {
  useLayoutEffect(() => {
    useUserStore.persist.rehydrate();
  }, []);
  return (
    // <StrictMode>
    <AppTheme>
      <AppRouter />
    </AppTheme>
    // </StrictMode>
  );
}

export default App;
