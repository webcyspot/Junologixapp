import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import ChatWidget from "../components/ChatWidget/ChatWidget";
import { useAppContext } from "../context";
import { useNavigate, useLocation } from "react-router-dom";

function Layout({ children }: any) {
  const { isChatBoxOpen, isLoginModalOpen, isRegisterModalOpen } =
    useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    if (isLoginModalOpen) {
      searchParams.set("q", "sign-in");
      navigate({ search: "?" + searchParams.toString() });
    } else {
      searchParams.delete("q");
      navigate({ search: "?" + searchParams.toString() });
    }
  }, [isLoginModalOpen, navigate, location.search]);

  useEffect(() => {
    if (isRegisterModalOpen) {
      searchParams.set("q", "register");
      navigate({ search: "?" + searchParams.toString() });
    } else {
      searchParams.delete("q");
      navigate({ search: "?" + searchParams.toString() });
    }
  }, [isRegisterModalOpen, navigate, location.search]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="outline-none">
      <Header />
      {children}
      {isChatBoxOpen && <ChatWidget />}
      <Footer />
    </div>
  );
}

export default Layout;
