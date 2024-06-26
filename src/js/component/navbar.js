import React, { useContext } from "react";
import { Single } from "../views/single"
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { MetaMask } from ".././component/metamask.js";

export const Navbar = (index) => {
  const { store, actions } = useContext(Context);
  let favs = store.favorites.find;


  return (
    
    <nav className="navbar navbar-black bg-black mb-3">
      
      <Link to="/">
        <span className="navbar-brand mb-0 h1"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" height={70}/><MetaMask /></span>
      </Link>
      
      <div className="ml-auto">
          <div className="dropdown">
         
            {/* Display a Variable counting items inside of the store.favorites */}
            
            <button
              className="btn btn-warning dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              <span className="fa fa-heart" />{" "}
              {`Favorites (${store.favorites.length})`}
            </button>{" "}
            <div
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton"
            >
              {store.favorites.map((item, index) => {
                return (
                  <div key={index}>
                    <a className="align-middle dropdown-item">
                      {item.name}
                      <button
                        onClick={() => actions.removeFavorites(index)}
                        className="fa fa-trash"
                      ></button>
                   </a>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </div>
                );
              })}
            </div>
          </div>
      </div>
    </nav>
  );
};
