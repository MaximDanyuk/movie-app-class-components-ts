/* eslint-disable */

import Main from './Main';
import CheckConnection from './CheckConnection';
import api from '../utils/Api';
import GenreMovieContext from '../contexts/GenreMovieContext';
import React from 'react';
import { ImovieGrade } from '../interfaces/interfaces';
import { debounce } from 'ts-debounce';

class App extends React.PureComponent {
  state = {
    movieData: [],
    isLoad: true,
    isEmpty: false,
    number: 1,
    rated: [],
    section: 'search',
    genresNames: [],
    autorKey: 0,
    movieGrade: [],
    moviesTotalLength: 0,
  };
  getPopularMoviesFunction = () => {
    this.setState({
      isLoad: true,
    });
    api
      .getPopularMovies({ page: 1 })
      .then((findMovies) =>
        this.setState({
          movieData: findMovies.results,
          moviesTotalLength: findMovies.total_results,
        }),
      )
      .catch(() => 'Ошибка на стороне сервера, уже решаем')
      .finally(() => {
        this.setState({
          isLoad: false,
        });
      });
  };

  componentDidMount() {
    this.getPopularMoviesFunction();
    api
      .getGenres()
      .then((data) => {
        this.setState({ genresNames: data.genres });
      })
      .catch(() => 'Ошибка на стороне сервера, уже решаем');
  }

  handleCardRate = (id: number | string, value: number) => {
    const { autorKey, movieGrade } = this.state;
    api
      .setRate(autorKey, id, value)
      .then((data) => {
        if (movieGrade.some((el: ImovieGrade) => el.id === id)) {
          const newRated = movieGrade.filter((el: ImovieGrade) => {
            if (el.id === id) {
              el.value = value;
            }
            return el;
          });
          this.setState({ movieGrade: newRated });
        } else {
          const movieGradeItem: ImovieGrade = {
            id: id,
            value: value,
          };
          this.setState(
            ({ movieGrade }: { movieGrade: ImovieGrade[] }) => {
              return { movieGrade: [movieGradeItem, ...movieGrade] };
            },
          );
        }
      })
      .catch(() => 'Ошибка на стороне сервера, уже решаем');
  };

  componentDidUpdate(prevProps: unknown, prevstate: unknown) {
    /// не используем же все равно
    const { autorKey } = this.state;

    this.setState(() => {
      return { autorKey: JSON.parse(localStorage.autorKey) };
    });

    if (!autorKey || autorKey == 0) {
      api
        .getSession()
        .then((data) => {
          this.setState(() => {
            return { autorKey: data.guest_session_id };
          });

          localStorage.setItem(
            'autorKey',
            JSON.stringify(data.guest_session_id),
          );
        })
        .catch(() => 'Ошибка на стороне сервера, уже решаем');
    }
  }

  handleChangeSection = (key: string) => {
    const { autorKey } = this.state;
    this.setState({
      isLoad: true,
    });
    this.setState({
      section: key,
    });

    if (key === 'rated') {
      api
        .getRated(autorKey)
        .then((data) => {
          this.setState({ rated: data.results });
        })
        .catch(() => 'Ошибка на стороне сервера, уже решаем')
        .finally(() => {
          this.setState({
            isLoad: false,
          });
        });
    } else {
      this.getPopularMoviesFunction();
    }
  };

  handleSearchMovie = (query: string, page: number) => {
    this.setState({
      isLoad: true,
    });
    return api
      .getSearchMovies({ query, page })
      .then((findMovies) => {
        if (!findMovies.results.length) {
          this.setState({
            isEmpty: true,
          });
        } else {
          this.setState({
            movieData: findMovies.results,
            isEmpty: false,
            moviesTotalLength: findMovies.total_results,
          });
        }
      })
      .catch(() => 'Ошибка на стороне сервера, уже решаем')
      .finally(() => {
        this.setState({
          isLoad: false,
        });
      });
  };

  paginationClick = (page: number) => {
    this.setState({
      isLoad: true,
    });
    api
      .getPopularMovies({ page })
      .then((findMovies) => {
        this.setState({
          movieData: findMovies.results,
        });
      })
      .then(() => {
        window.scrollTo(0, 0);
        this.setState({
          number: page,
        });
      })
      .catch(() => 'Ошибка на стороне сервера, уже решаем')
      .finally(() => {
        this.setState({
          isLoad: false,
        });
      });
  };

  render() {
    const debouncedShowSearchData = debounce((text) => {
      text = text.trim();
      if (text.length) {
        this.handleSearchMovie(text, 1);
      }

      if (text.length === 0) {
        this.getPopularMoviesFunction();
      }
    }, 350);

    const {
      genresNames,
      movieData,
      isLoad,
      isEmpty,
      number,
      section,
      rated,
      movieGrade,
      moviesTotalLength,
    } = this.state;
    return (
      <CheckConnection>
        <GenreMovieContext.Provider value={genresNames}>
          <Main
            movieGrade={movieGrade}
            rated={rated}
            debouncedShowSearchData={debouncedShowSearchData}
            movieData={movieData}
            paginationClick={this.paginationClick}
            isLoad={isLoad}
            isEmpty={isEmpty}
            number={number}
            handleCardRate={this.handleCardRate}
            section={section}
            handleChangeSection={this.handleChangeSection}
            moviesTotalLength={moviesTotalLength}
          />
        </GenreMovieContext.Provider>
      </CheckConnection>
    );
  }
}

export default App;
