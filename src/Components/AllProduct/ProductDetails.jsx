import { parfumContext } from "ContextProvider/ParfumContextProvider";
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AllProduct.css";
import Coments from "../Comments/Coments";

const ProductDetails = () => {
  const { getOneParfum, parfumDetails, deleteParfum } =
    useContext(parfumContext);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getOneParfum(id);
  }, [id]);

  const navigate = useNavigate();

  console.log(parfumDetails);
  return (
    <>
      {parfumDetails ? (
        <div>
          <div className="nameWithBC">
            <h2>{parfumDetails.name}</h2>
          </div>
          <div>
            <div className="generalInformation">
              <div>
                <img src={parfumDetails.url} />
              </div>
              <div className="almostGeneralInfo">
                <h5>{parfumDetails.name} </h5>
                <h5>
                  Объем в мл:
                  <br />
                  {parfumDetails.volume}
                </h5>
                <h5>Цена: {parfumDetails.price} сом</h5>
                <h6>Бесплатная доставка при покупке от 5 000 сом</h6>
                <h6>
                  Цена действительна только для интернет-магазина и может
                  отличаться от цен в розничных магазинах
                </h6>
                <div>
                  <span className="h5Cart">Добавить в корзину </span>
                </div>
                <div className="btnMain">
                  <span
                    className="deleteBtn"
                    onClick={() => deleteParfum(parfumDetails.id)}
                  >
                    Удалить
                  </span>

                  <span
                    onClick={() => navigate(`/edit/${id}`)}
                    className="EditBtn"
                  >
                    Изменить
                  </span>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
          <div>
            <div className="divAboutUs">
              <div>
                <h1 className="h1AboutUs"> Описание</h1>
                <p>{parfumDetails.desc}</p>
              </div>
            </div>
          </div>
          <Coments />
        </div>
      ) : (
        <h2>Loading 0_0</h2>
      )}
    </>
  );
};

export default ProductDetails;
