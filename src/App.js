import React from "react";
import { Route, Routes } from "react-router";
import Admin from "./components/Admin";
import Cart from "./components/Cart";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/Signup";
import { Footer } from "./pages/Footer";
import Home from "./pages/Home";

function App() {
  const localSignup = localStorage.getItem("signup");

  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/carts" element={<Cart />} />
        <Route path="*" element={<NotFound />} />

        <Route
          path="/"
          element={           
              <Home />
              
              
            
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
      </Routes>
    </>
  );
}

export default App;
