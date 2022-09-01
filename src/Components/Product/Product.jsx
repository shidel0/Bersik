import { Button } from "@mui/material";
import { cartContext } from "ContextProvider/CartContext";
import { parfumContext } from "ContextProvider/ParfumContextProvider";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const { getParfum, parfumArr } = useContext(parfumContext);

  const { addProductCart } = useContext(cartContext);
  useEffect(() => {
    getParfum();
  }, []);
  return (
    <div>
      {parfumArr ? (
        <div>
          <div>
            <h3>НОВИНКИ</h3>{" "}
            <div className="main-product-item">
              {parfumArr.slice(0, 4).map((item) => (
                <div key={item.id} className="product-item">
                  <div className="product-img">
                    <Link to={`/details/${item.id}`}>
                      <img src={item.url} />
                    </Link>
                  </div>
                  <div className="product-list">
                    <h3>{item.name.substring(0, 19)}</h3>
                    <span className="price">{item.price} com</span>
                    <div className="actions">
                      <div className="add-to-cart">
                        <Button onClick={() => addProductCart(item)}>
                          В корзину
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}{" "}
            </div>
          </div>
          <div style={{ marginTop: "40px" }}>
            <h3>ПОПУЛЯРНЫЕ</h3>{" "}
            <div className="main-product-item">
              {parfumArr.slice(4, 8).map((item) => (
                <div key={item.id} className="product-item">
                  <div className="product-img">
                    <Link to={`/details/${item.id}`}>
                      <img src={item.url} />
                    </Link>
                  </div>
                  <div className="product-list">
                    <h3>{item.name.substring(0, 19)}</h3>
                    <div className="stars"></div>
                    <span className="price">{item.price}$</span>
                    <div className="actions">
                      <div className="add-to-cart">
                        <a href="" className="cart-button">
                          В корзину
                        </a>
                      </div>
                      <div className="add-to-links">
                        <a href="" className="wishlist"></a>
                        <a href="" className="compare"></a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}{" "}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Product;
