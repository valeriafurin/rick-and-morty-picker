import React from "react";
import { IEpisode } from "./interfaces";

export default function EpisodesList(props: any): JSX.Element {
  const { episodes, toggleFavoriteAction, favorites, store } = props;
  const { state, dispatch } = store;

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img src={episode.image.medium} alt="Rick and Morty {episode.name}" />
        <div>{episode.name}</div>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            Season: {episode.season} Series: {episode.number}
          </div>
          <button
            type="button"
            onClick={() => toggleFavoriteAction(state, dispatch, episode)}
          >
            {favorites.find((fav: IEpisode) => fav.id === episode.id)
              ? "Unfav"
              : "Fav"}
          </button>
        </section>
      </section>
    );
  });
}
