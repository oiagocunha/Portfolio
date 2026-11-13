import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import HomeHero from "@/components/home/HomeHero";
import SelectedWork from "@/components/home/SelectedWork";
import HomeContact from "@/components/home/HomeContact";
import { legacyHomeAnchorTarget } from "@/lib/paths";

const Index = () => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  // Links shared before the redesign (e.g. /#servicos) point to sections now on /servicos.
  useEffect(() => {
    const target = legacyHomeAnchorTarget(pathname, hash);
    if (target) navigate(target, { replace: true });
  }, [pathname, hash, navigate]);

  return (
    <MainLayout>
      <HomeHero />
      <SelectedWork />
      <HomeContact />
    </MainLayout>
  );
};

export default Index;
