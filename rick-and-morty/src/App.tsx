import React from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";
import styled from "styled-components";

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
          <Link to="/">Home</Link>
          <Link to="/faves">Favorite(s): {state.favorites.length}</Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
}
