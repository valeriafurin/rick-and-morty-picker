import React from 'react'
import {IAction, IEpisode, IEpisodeProps} from './interfaces'
import {Store} from './Store'

export default function HomePage() {
    const {state, dispatch} = React.useContext(Store)

    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction()})
      
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
        const episodeInFav = state.favorites.includes(episode)
        let dispatchObj = {
          type: 'ADD_FAV',
          payload: episode
        }
        if (episodeInFav) {
          const favWithoutEpisode = state.favorites.filter((fav: IEpisode) => fav.id !== episode.id)
          dispatchObj = {
            type: 'REMOVE_FAV',
            payload: favWithoutEpisode
          }
        }
        return dispatch(dispatchObj)
        }

       const props: IEpisodeProps = {
        episodes: state.episodes,
        toggleFavoriteAction,
        favorites: state.favorites
        }

}
