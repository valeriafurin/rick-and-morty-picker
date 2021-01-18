import React from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";
import { StyledLink } from "./styled-components/StyledLink.styled";
import { Header } from "./styled-components/Header.styled";

export default function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <Header>
        <div>
          <h1>Rick and Morty Season Picker</h1>
          <p>Pick your favorite episode!</p>
        </div>
        <div>
          <StyledLink>
            <Link to="/">Home</Link>
            <Link to="/faves">Favorite(s): {state.favorites.length}</Link>
          </StyledLink>
        </div>
      </Header>
      {props.children}
    </React.Fragment>
  );
}
