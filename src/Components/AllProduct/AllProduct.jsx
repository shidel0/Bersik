import { Button, Pagination } from "@mui/material";
import Coments from "Components/Comments/Coments";
import Filter from "Components/Filter/Filter";
import LiveSearch from "Components/LiveSearch/LiveSearch";
import { cartContext } from "ContextProvider/CartContext";
import { parfumContext } from "ContextProvider/ParfumContextProvider";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "./AllProduct.css";

const AllProduct = () => {
  const { getParfum, parfumArr, pageTotalCount } = useContext(parfumContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [type, setType] = useState(searchParams.get("type") || "all");

  const [price, setPrice] = useState([0, 20000]);

  const [page, setPage] = useState(1);

  const { addProductCart } = useContext(cartContext);
  const paramsWithType = () => {
    return {
      type: type,
      q: searchParams.get("q") || "",
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: 7,
    };
  };

  const paramsNoType = () => {
    return {
      q: searchParams.get("q") || "",
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: 7,
    };
  };

  useEffect(() => {
    getParfum();
    if (searchParams.get("type")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, []);

  useEffect(() => {
    getParfum();
    if (type === "all") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [searchParams, page, price, type]);

  return (
    <div>
      <LiveSearch />

      {parfumArr ? (
        <div>
          <div>
            <h3>ВСЕ ТОВАРЫ</h3>{" "}
            <div className="main-product-item">
              <div>
                <Filter
                  type={type}
                  setType={setType}
                  price={price}
                  setPrice={setPrice}
                />
              </div>
              {parfumArr.map((item) => (
                <div key={item.id} className="product-item">
                  <div className="product-img">
                    <Link to={`/details/${item.id}`}>
                      <img src={item.url} />
                    </Link>
                  </div>
                  <div className="product-list">
                    <h3>{item.name}</h3>
                    <span className="price">{item.price} сом</span>
                    <div className="actions">
                      <div className="add-to-cart">
                        <Button onClick={() => addProductCart(item)}>
                          В корзину
                        </Button>
                      </div>
                      <div className="add-to-links"></div>
                    </div>
                  </div>
                </div>
              ))}{" "}
            </div>
          </div>
          <Pagination
            count={+pageTotalCount}
            page={+page}
            variant="outlined"
            color="secondary"
            onChange={(e, pageVal) => {
              setPage(pageVal);
            }}
          />
          <Coments />
        </div>
      ) : null}
    </div>
  );
};

export default AllProduct;
