import { Outlet } from "react-router-dom";

import PromoBar from "@/components/store/PromoBar";
import StoreNavbar from "@/components/store/StoreNavbar";
import StoreFooter from "@/components/store/StoreFooter";

export default function StoreLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <PromoBar />
      <StoreNavbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <StoreFooter />
    </div>
  );
}
