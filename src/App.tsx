import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Home from "./routes/home/home";
import SignIn from "./routes/authentication/authentication";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
