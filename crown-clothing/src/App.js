import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigationBar/navigationBar.component";
import Shop from "./components/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
