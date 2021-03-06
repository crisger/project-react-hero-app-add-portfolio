import React from "react";
import { useParams } from "react-router-dom";
import { getHeroById } from "../selectors/getHeroById";

export const HeroScreen = ({ history }) => {
  const { heroId } = useParams();

  const hero = getHeroById(heroId);

  const { alter_ego, characters, first_appearance, publisher, superhero } =
    hero;

  const handleReturn = () => {
    history.goBack();
  };

  return (
    <div className="container-custom d-flex align-content-center align-items-center h-100">
      <section className="row justify-content-center align-items-center">
        <h3 className="text-center display-3">{superhero}</h3>
        <div className="col-12 d-flex flex-column justify-content-center align-items-lg-center  align-items-md-center">
          <div
            className="card mb-3 animate__animated animate__fadeInLeft"
            style={{ maxWidth: "540px" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={`../assets/images/${heroId}.jpg`}
                  alt={superhero}
                  className="img-fluid d-block mx-auto"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-center">{superhero}</h5>
                  <p>{alter_ego}</p>
                  <p>{characters}</p>
                  <p>{first_appearance}</p>
                  <p>{publisher}</p>
                </div>
              </div>
            </div>
            <button onClick={handleReturn} className="btn btn-primary">
              Go back
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
