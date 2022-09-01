import CartContext from "ContextProvider/CartContext";
import CommentsContextProvider from "ContextProvider/CommentsContextProvider";
import ParfumContextProvider from "ContextProvider/ParfumContextProvider";
import React from "react";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <>
      <CommentsContextProvider>
        <CartContext>
          <ParfumContextProvider>
            <NavBar />
            <MainRoutes />
            <Footer />
          </ParfumContextProvider>
        </CartContext>
      </CommentsContextProvider>
    </>
  );
};

export default App;
