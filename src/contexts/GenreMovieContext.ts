/*eslint-disable */

import React from 'react';
interface context {
  id: number | string;
  name: string;
}

const GenreMovieContext = React.createContext<context[] | []>([]);

export default GenreMovieContext;
