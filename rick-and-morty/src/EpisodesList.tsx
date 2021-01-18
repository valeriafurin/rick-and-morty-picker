import React from "react";
import { IEpisode } from "./interfaces";
import { Button } from "./styled-components/Button.styled";
import { EpisodeName } from "./styled-components/EpisodeName.styled";

export default function EpisodesList(props: any): JSX.Element {
  const { episodes, toggleFavoriteAction, favorites, store } = props;
  const { state, dispatch } = store;

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img src={episode.image.medium} alt="Rick and Morty {episode.name}" />
        <EpisodeName>{episode.name}</EpisodeName>
        <Button onClick={() => toggleFavoriteAction(state, dispatch, episode)}>
          {favorites.find((fav: IEpisode) => fav.id === episode.id)
            ? "Unfav"
            : "Fav"}
        </Button>
      </section>
    );
  });
}
