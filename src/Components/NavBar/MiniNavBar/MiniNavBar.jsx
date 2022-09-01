import { useAuth } from "hooks/use-auth";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "store/slices/userSlice";
import "./MiniNavBar.css";

const MiniNavBar = () => {
  const dispatch = useDispatch();

  const { isAuth, email } = useAuth();
  return (
    <div className="mainMiniNavBar">
      <div className="mininavbar">
        <h5 className="dispNone">Киргизия</h5>
        <h5 className="dispNone">+996-555-999-999</h5>{" "}
        <Link className="callBtn dispNone" to="/contact">
          Заказать звонок
        </Link>
        <h5 className="dispNone">Интернет-магазин: +996 999-555-555</h5>
        <Link to="/cart">Корзина</Link>
        <Link to="/addParfum">Добавить</Link>
        {isAuth ? (
          <div>
            <button className="s" onClick={() => dispatch(removeUser())}>
              Log out from {email}
            </button>
          </div>
        ) : (
          <Link className="callBtn" to="/login">
            Войти
          </Link>
        )}
      </div>
    </div>
  );
};

export default MiniNavBar;
