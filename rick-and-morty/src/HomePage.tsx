import React from "react";
import { Store } from "./Store";
import { IEpisodeProps } from "./interfaces";
import { fetchDataAction, toggleFavoriteAction } from "./Actions";

const EpisodesList = React.lazy(() => import("./EpisodesList"));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavoriteAction,
    favorites: state.favorites,
  };

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>loading ... </div>}>
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
