import React from 'react';
import {Store} from './Store'
import {IAction, IEpisode} from './interfaces'

export default function App():JSX.Element {
  const {state, dispatch} = React.useContext(Store)

 React.useEffect(() => {
  state.episodes.length === 0 && fetchDataAction()
 })

 const fetchDataAction = async () => {
   const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
   const data = await fetch(URL)
   const dataJSON = await data.json();
   return dispatch({
     type: 'FETCH_DATA',
     payload: dataJSON._embedded.episodes
   })
 }

 const toggleFavoriteAction = (episode: IEpisode): IAction => {
  const episodeInFav = state.favourites.includes(episode)
  let dispatchObj = {
    type: 'ADD_FAV',
    payload: episode
  }
  if (episodeInFav) {
    dispatchObj = {
      type: 'REMOVE_FAV',
      payload: episode
  }
}
 return dispatch(dispatchObj)
 }

  return (
    <React.Fragment>
      <header className="header">
        <h1>Rick and Morty Season Picker</h1>
        <p>Pick your favorite episode!</p>
      </header>
      <section className="episode-layout">
        {state.episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id} className="episode-box">
              <img src={episode.image.medium} alt='Rick and Morty {episode.name}'/>
              <div>{episode.name}</div>
              <section>
                <div>Season: {episode.season} Number: {episode.number}</div>
                <button type="button" onClick={() => toggleFavoriteAction(episode)}>Fav</button>
              </section>
            </section>
          )
        })}
      </section>
    </React.Fragment>
  );
}
