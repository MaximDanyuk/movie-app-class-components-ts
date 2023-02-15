/* eslint-disable */

class Api {
  url: string;
  key: string;

  constructor({ url, key }: { url: string; key: string }) {
    this.url = url;
    this.key = key;
  }

  _checkResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }

    Promise.reject({
      message: `Усп, что-то пошло не так, уже решаем  ${res.status}`,
    });
  }

  getPopularMovies({ page }: { page: number }) {
    return fetch(
      `${this.url}/movie/popular?api_key=${this.key}&language=en-US&page=${page}`,
    ).then((res) => this._checkResponse(res));
  }

  getSearchMovies({ query, page }: { query: string; page: number }) {
    return fetch(
      `${this.url}/search/movie?api_key=${this.key}&language=en-US&query=${query}&page=${page}`,
    ).then((res) => this._checkResponse(res));
  }

  setRate(
    guestId: string | number,
    id: number | string,
    rate: number,
  ) {
    return fetch(
      `${this.url}/movie/${id}/rating?api_key=${this.key}&guest_session_id=${guestId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({ value: rate }),
      },
    ).then((res) => this._checkResponse(res));
  }

  getRated(guestId: string | number) {
    return fetch(
      `${this.url}/guest_session/${guestId}/rated/movies?api_key=${this.key}&language=en-US&sort_by=created_at.asc`,
    ).then((res) => this._checkResponse(res));
  }

  getGenres() {
    return fetch(
      `${this.url}/genre/movie/list?api_key=${this.key}&language=en-US`,
    ).then((res) => this._checkResponse(res));
  }

  getSession() {
    return fetch(
      `${this.url}/authentication/guest_session/new?api_key=${this.key}`,
    ).then((res) => this._checkResponse(res));
  }
}

const api = new Api({
  url: 'https://api.themoviedb.org/3',
  key: '9e5c75ffd938a1f31a2794138fa3d88b',
});

export default api;
