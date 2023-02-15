export interface ImovieGrade {
  id: number | string;
  value: number;
}

export interface movie {
  original_title: string;
  release_date: string;
  overview: string;
  backdrop_path: string;
  vote_average: string | number;
  id: string;
  genre_ids: string;
}
