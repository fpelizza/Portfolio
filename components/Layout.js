import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "./Navbar";
import NProgress from "nprogress";

const Layout = ({ children, footer = true }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div className="bg-dark" style={{ minHeight: "100vh" }}>
      <Navbar />
      <main className="container py-4">{children}</main>
      {footer && (
        <footer className="bg-dark text-center">
          <h1>&copy; Fermin Pelizza Portfolio</h1>
          <p>2000 - {new Date().getFullYear()}</p>
          <p style={{ margin: "0", padding: "1rem" }}>All rights Reserved.</p>
        </footer>
      )}
    </div>
  );
};

export default Layout;
