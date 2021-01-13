import React from 'react';
import {Store} from './Store'
import {IAction, IEpisode, IEpisodeProps} from './interfaces'
import {Link} from '@reach/router'

const EpisodesList = React.lazy(() => import('./EpisodesList'))

export default function App():JSX.Element {
 const {state, dispatch} = React.useContext(Store)
 

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty Season Picker</h1>
          <p>Pick your favorite episode!</p>
        </div>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/faves'>Favorite(s): {state.favorites.length}</Link>
        </div>
      </header>
      <React.Suspense fallback={<div>loading ... </div>}>
        <section className="episode-layout">
          <EpisodesList { ...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
