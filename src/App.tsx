import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import React, { Suspense } from "react";
import Spinner from "./components/spinner/spinner";

const Home = React.lazy(() => import("./routes/home/home"));
const Shop = React.lazy(() => import("@/routes/shop/shop"));
const Checkout = React.lazy(() => import("@/routes/checkout/checkout"));
const Authentication = React.lazy(
  () => import("./routes/authentication/authentication")
);
const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="shop/*" element={<Shop />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
