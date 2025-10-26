import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/navbar";
import { Toaster } from "sonner";
import Footer from "../components/footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <main className="container mx-auto px-4 md:px-0 my-20">
        <Outlet />
        <Toaster richColors position="bottom-right" />
      </main>
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
});
