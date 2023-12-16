import React from "react";
import Home from "./pages/Home";
import User from "./pages/User";
import Admin from "./pages/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import { PublicRoute, ProtectedRoute } from "./routes/ProtectedRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/user"
            element={
              <PublicRoute>
                <User />
              </PublicRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NoPage />} />
          <Route path="/404" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
