"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

export default function AuthGuard({ children }) {
  const { user } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // 1. Check if the user is trying to access a protected route
    if (pathname.startsWith("/dashboard")) {
      // 2. Check if the user is NOT logged in
      // We also check localStorage directly to prevent flashing on refresh
      const storedUser = localStorage.getItem("app_current_user");

      if (!user && !storedUser) {
        // 3. Redirect to login
        router.push("/login");
      }
    }
  }, [pathname, user, router]);

  return <>{children}</>;
}
