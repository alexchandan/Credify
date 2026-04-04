import { useContext } from "react";
import AuthContext from "../context/AuthContext";
/* ─────────────────────────────────────────────────────────────
   3. useAuth hook — use this in any component
   Example:
     const { user, login, logout, isAdmin } = useAuth()
   ───────────────────────────────────────────────────────────── */
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside <AuthProvider>. " +
        "Make sure AuthProvider wraps your app in App.jsx.",
    );
  }

  return context;
};
