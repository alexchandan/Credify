import { createContext, useState, useEffect, useCallback } from "react";
import { getCurrentUser } from "../services/authService";

/* ─────────────────────────────────────────────────────────────
   1. Create the context
   ───────────────────────────────────────────────────────────── */
const AuthContext = createContext(null);

/* ─────────────────────────────────────────────────────────────
   2. AuthProvider — wraps the entire app in App.jsx
   ───────────────────────────────────────────────────────────── */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // logged-in user object or null
  const [loading, setLoading] = useState(true); // true while checking saved token
  const [error, setError] = useState(null); // global auth error message

  /* ── On app load: restore session from saved token ── */
  useEffect(() => {
    const restoreSession = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        // No token saved → user is not logged in
        setLoading(false);
        return;
      }

      try {
        // Token found → verify it with the server and get user data
        const userData = await getCurrentUser();
        setUser(userData);
      } catch (err) {
        // Token is expired or invalid → clear it
        console.warn("Session expired or invalid token:", err.message);
        localStorage.removeItem("token");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  /* ── login: called after a successful API login response ──
     Usage inside Login.jsx:
       const { token, user } = await loginAPI({ email, password })
       login(user, token)
  */
  const login = useCallback((userData, token) => {
    localStorage.setItem("token", token);
    setUser(userData);
    setError(null);
  }, []);

  /* ── logout: clears token and resets user to null ── */
  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setUser(null);
    setError(null);
  }, []);

  /* ── updateUser: updates user fields without re-login ──
     Useful when user edits their profile (name, username, etc.)
     Usage: updateUser({ name: "New Name" })
  */
  const updateUser = useCallback((updatedFields) => {
    setUser((prev) => (prev ? { ...prev, ...updatedFields } : prev));
  }, []);

  /* ── Helper flags ── */
  const isAuthenticated = Boolean(user);
  const isCandidate = user?.role === "candidate";
  const isRecruiter = user?.role === "recruiter";
  const isAdmin = user?.role === "admin";

  /* ── Value exposed to all child components ── */
  const value = {
    // State
    user,
    loading,
    error,
    setError,

    // Actions
    login,
    logout,
    updateUser,

    // Computed helpers
    isAuthenticated,
    isCandidate,
    isRecruiter,
    isAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
