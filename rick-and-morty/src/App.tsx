import React from 'react';
import {Store} from './Store'

interface IEpisode {
 airdate: string,
 airstamp: string,
 airtime: string,
 id: number,
 image: {medium: string, original: string},
 name: string,
 number: number,
 runtime: number,
 season: number,
 summary: string,
 url: string
}

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

  return (
    <React.Fragment>
      <h1>Rick and Morty Season Picker</h1>
      <p>Pick your favorite episode!</p>
      <section>
        {state.episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id}>
              <img src={episode.image.medium} alt='Rick and Morty {episode.name}'/>
              <div>{episode.name}</div>
              <section>
                Season: {episode.season} Number: {episode.number}
              </section>
            </section>
          )
        })}
      </section>
    </React.Fragment>
  );
}
