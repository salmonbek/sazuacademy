import { Link } from "react-router-dom";
import frontend from "../../assets/images/frontend.jpg";
import backend from "../../assets/images/python.jpg";
import english from "../../assets/images/english.jpg";
import german from "../../assets/images/germany.jpg";
import kore from "../../assets/images/korea.jpg";
import turkey from "../../assets/images/turkey.jpg";
import russia from "../../assets/images/russia.jpg";
import math from "../../assets/images/math.jpg";
import mental from "../../assets/images/mrntal.jpg";

const Courses = () => {
  return (
    <section className="courses">
      <div className="container">
        <h1 className="courses-title">Kurslar</h1>
        <div className="card">
          <div className="card-items">
            <img className="course-img" src={frontend} alt="Frontend kursi" />
            <h4>Frontend</h4>
            <p>
              Frontend kursida siz HTML, CSS, JavaScript va React orqali
              zamonaviy web saytlar yaratishni o‘rganasiz.
            </p>
            <Link to="/courses">Batafsil</Link>
          </div>
          <div className="card-items">
            <img className="course-img" src={backend} alt="Backend kursi" />
            <h4>Backend</h4>
            <p>
              Backend kursida Python va Django yordamida server tomon
              dasturlashni o‘rganasiz.
            </p>
            <Link to="/courses">Batafsil</Link>
          </div>
          <div className="card-items">
            <img className="course-img" src={english} alt="Ingliz tili" />
            <h4>Ingliz tili</h4>
            <p>
              Ingliz tili kursida siz grammatika, speaking va writing
              ko‘nikmalarini rivojlantirasiz.
            </p>
            <Link to="/courses">Batafsil</Link>
          </div>
          <div className="card-items">
            <img className="course-img" src={german} alt="Nemis tili" />
            <h4>Nemis tili</h4>
            <p>
              Nemis tili kursida A1 dan B2 gacha bo‘lgan bosqichlarni
              o‘zlashtirasiz.
            </p>
            <Link to="/courses">Batafsil</Link>
          </div>
          <div className="card-items">
            <img className="course-img" src={russia} alt="Rus tili" />
            <h4>Rus tili</h4>
            <p>
              Rus tili kursi kundalik suhbat va grammatikani mukammal o‘rgatadi.
            </p>
            <Link to="/courses">Batafsil</Link>
          </div>
          <div className="card-items">
            <img className="course-img" src={kore} alt="Koreys tili" />
            <h4>Koreys tili</h4>
            <p>
              Koreys tili kursi orqali TOPIK imtihoniga tayyorlanishingiz
              mumkin.
            </p>
            <Link to="/courses">Batafsil</Link>
          </div>
          <div className="card-items">
            <img className="course-img" src={turkey} alt="Turk tili" />
            <h4>Turk tili</h4>
            <p>Turk tili kursida kundalik muloqot va grammatika o‘rgatiladi.</p>
            <Link to="/courses">Batafsil</Link>
          </div>
          <div className="card-items">
            <img className="course-img" src={math} alt="Matematika" />
            <h4>Matematika</h4>
            <p>
              Matematika kursi orqali algebra va geometriya bilimlaringizni
              mustahkamlaysiz.
            </p>
            <Link to="/courses">Batafsil</Link>
          </div>
          <div className="card-items">
            <img className="course-img" src={mental} alt="Mental arifmetika" />
            <h4>Mental arifmetika</h4>
            <p>
              Mental arifmetika kursida tez hisoblash va mantiqiy fikrlashni
              rivojlantirasiz.
            </p>
            <Link to="/courses">Batafsil</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
