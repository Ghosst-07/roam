"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("app_current_user");
    if (storedUser) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, []);

  const register = (userData) => {
    const existingUsers = JSON.parse(localStorage.getItem("app_users") || "[]");
    const userExists = existingUsers.find((u) => u.email === userData.email);

    if (userExists) {
      throw new Error("User already exists with this email!");
    }

    const updatedUsers = [...existingUsers, userData];
    localStorage.setItem("app_users", JSON.stringify(updatedUsers));
    localStorage.setItem("app_current_user", JSON.stringify(userData));
    setUser(userData);
    return true;
  };

  const login = (email, password) => {
    const existingUsers = JSON.parse(localStorage.getItem("app_users") || "[]");
    const validUser = existingUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!validUser) {
      throw new Error("Invalid email or password");
    }

    localStorage.setItem("app_current_user", JSON.stringify(validUser));
    setUser(validUser);
    return true;
  };

  const logout = () => {
    localStorage.removeItem("app_current_user");
    setUser(null);
    router.push("/login");
  };

  // --- NEW FUNCTION: Update Profile ---
  const updateProfile = (updatedData) => {
    if (!user) return;

    // Merge existing user data with new updates
    const newUser = { ...user, ...updatedData };

    // 1. Update Current Session
    localStorage.setItem("app_current_user", JSON.stringify(newUser));
    setUser(newUser);

    // 2. Update the main "Database" (app_users array)
    const existingUsers = JSON.parse(localStorage.getItem("app_users") || "[]");
    const newAllUsers = existingUsers.map((u) =>
      u.email === user.email ? newUser : u
    );
    localStorage.setItem("app_users", JSON.stringify(newAllUsers));
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
