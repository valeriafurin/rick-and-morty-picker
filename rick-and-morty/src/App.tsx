import React from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";

export default function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty Season Picker</h1>
          <p>Pick your favorite episode!</p>
        </div>
        <div>
          <Link to="/" className="home-link">
            Home
          </Link>
          <Link to="/faves" className="fav-link">
            Favorite(s): {state.favorites.length}
          </Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
}
