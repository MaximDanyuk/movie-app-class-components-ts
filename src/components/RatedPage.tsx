/* eslint-disable */
import MovieItem from './MovieItem';
import React from 'react';
import { ImovieGrade, movie } from '../interfaces/interfaces';

interface ratedPageProps {
  rated: movie[];
  handleCardRate: (id: number | string, value: number) => void;
  movieGrade: ImovieGrade[];
}

export default class RatedPage extends React.PureComponent<ratedPageProps> {
  render() {
    const { rated, handleCardRate, movieGrade } = this.props;
    return (
      <section className="card-items">
        {rated.map((el) => (
          <MovieItem
            key={el.id}
            handleCardRate={handleCardRate}
            movieGrade={movieGrade}
            {...el}
          />
        ))}
      </section>
    );
  }
}
