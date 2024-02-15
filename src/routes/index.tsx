import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesPaths } from "./RoutesPaths";
import { Home } from "../screens/Home";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesPaths.home()} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}