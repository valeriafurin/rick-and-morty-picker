import React from "react";
import { Store } from "./Store";
import { toggleFavoriteAction } from "./Actions";
import { IEpisodeProps } from "./interfaces";

const EpisodesList = React.lazy(() => import("./EpisodesList"));

export default function FavPage(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favorites,
    store: { state, dispatch },
    toggleFavoriteAction,
    favorites: state.favorites,
  };
  return (
    <React.Suspense fallback={<div>loading ... </div>}>
      <div className="episode-layout">
        <EpisodesList {...props} />
      </div>
    </React.Suspense>
  );
}
