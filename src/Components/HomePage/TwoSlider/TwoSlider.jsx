import React from "react";
import "./TwoSlider.css";
const TwoSlider = () => {
  return (
    <div>
      <section>
        <div className="div">
          <span>Парфюмерия</span>
          <h2>О БРЕНДЕ Besnik .</h2>
          <p>
            Besnik . – это парфюмерия нового поколения, созданная <br /> на
            опыте великой парфюмерной истории. При создании <br /> ароматов мы
            используем только лучшие ингредиенты от <br /> ведущих парфюмерных
            домов Франции и Швейцарии, а <br /> производство основано на
            современных инновациях и <br />
            огромном опыте создания самых изысканных парфюмерных <br />{" "}
            композиций
          </p>
        </div>
        <div>
          <img
            className="imgMedia"
            src="https://s-parfum.ru/img/main-parfum/1.jpg"
            alt="парфюм"
          />
        </div>
      </section>
      <section>
        <div>
          <img
            className="imgMedia"
            src="https://s-parfum.ru/img/main-cosmetic/2.jpg"
            alt="парфюм"
          />
        </div>
        <div className="div">
          <span>Парфюмерия</span>
          <h2>О БРЕНДЕ Besnik .</h2>
          <p>
            S Cosmetics - это уникальная уходовая линия средств для <br />{" "}
            красоты и здоровья. Она отражает нашу бесконечную <br />{" "}
            влюбленность в молодость и естественность. Наши формулы <br /> - это
            возможность показать вам естественный и прекрасный <br /> путь к
            достижению красоты и гармонии с собою.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TwoSlider;
