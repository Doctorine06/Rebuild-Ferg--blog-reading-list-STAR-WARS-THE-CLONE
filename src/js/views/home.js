import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { People } from "../component/people";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <section>
      <button
              className="btn btn-warning dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              <span className="fa fa-heart" />{" "}
              Characters
              
            </button>{" "}
        {/* <h2>Characters</h2> */}
        <div>
          {store.people.map((character, index) => {
            return <People key={index} index={index} char={character} />;
          })}
        </div>
      </section>

      <section>
      <button
              className="btn btn-warning dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              <span className="fa fa-heart" />{" "}
            Planets
              
            </button>{" "}
        <h2>Planets</h2>
        <div>
          {store.planets.map((world, index) => {
            return <Planets key={index} index={index} planet={world} />;
          })}
        </div>
      </section>

      <section>
      <button
              className="btn btn-warning dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              <span className="fa fa-heart" />{" "}
            Vehicles
              
            </button>{" "}
        <h2>Vehicles</h2>
        <div>
          {store.vehicles.map((ship, index) => {
            return <Vehicles key={index} index={index} vehicle={ship} />;
          })}
        </div>
      </section>

    </div>
  );
};
