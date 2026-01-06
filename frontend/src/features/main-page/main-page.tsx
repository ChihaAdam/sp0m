import { Suspense, lazy } from "react";

import About from "./about";
import Contact from "./contact";
import Loading from "../../shared/components/ui/loading";

const Home = lazy(() => import("./home"));
const Navbar = lazy(() => import("../navbar/navbar"));
const LinksAndLogin = lazy(() => import("./links-and-login"));
function MainPage() {
  return (
    <>
      <Navbar>
        <LinksAndLogin />
      </Navbar>
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>
    </>
  );
}

export default MainPage;
