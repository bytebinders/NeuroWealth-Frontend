import { Suspense } from "react";
import { PortfolioDashboard } from "@/components/dashboard/PortfolioDashboard";

export default function DashboardPage() {
  return (
    <Suspense fallback={null}>
      <PortfolioDashboard />
    </Suspense>
  );
}
