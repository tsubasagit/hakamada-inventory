"use client";

import { ReactNode, Suspense } from "react";
import { AuthProvider } from "@/hooks/useAuth";
import { StocktakingProvider } from "@/hooks/useStocktaking";
import { ToastProvider } from "@/components/ui";
import { AppShell } from "@/components/AppShell";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Suspense>
      <AuthProvider>
        <StocktakingProvider>
          <ToastProvider>
            <AppShell>{children}</AppShell>
          </ToastProvider>
        </StocktakingProvider>
      </AuthProvider>
    </Suspense>
  );
}
