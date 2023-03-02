/*eslint-disable */
import RowItems from './RowItems';
import Search from './Search';
import RatedPage from './RatedPage';
import SectionButtons from './SectionButtons';
import React from 'react';
import { ImovieGrade, movie } from '../interfaces/interfaces';

interface mainProps {
  movieData: movie[];
  paginationClick: (page: number) => void;
  isLoad: boolean;
  isEmpty: boolean;
  number: number;
  debouncedShowSearchData: (text: string) => void;
  handleCardRate: (id: number | string, value: number) => void;
  section: string;
  handleChangeSection: (key: string) => void;
  rated: movie[];
  movieGrade: ImovieGrade[];
  moviesTotalLength: number;
}

class Main extends React.PureComponent<mainProps> {
  render() {
    const {
      movieData,
      paginationClick,
      isLoad,
      isEmpty,
      number,
      debouncedShowSearchData,
      handleCardRate,
      section,
      handleChangeSection,
      rated,
      movieGrade,
      moviesTotalLength,
    } = this.props;

    return (
      <main className="main page__main">
        <SectionButtons handleChangeSection={handleChangeSection} />
        {section === 'search' ? (
          <>
            <Search
              debouncedShowSearchData={debouncedShowSearchData}
            />
            <RowItems
              movieGrade={movieGrade}
              movieData={movieData}
              isEmpty={isEmpty}
              paginationClick={paginationClick}
              isLoad={isLoad}
              number={number}
              handleCardRate={handleCardRate}
              moviesTotalLength={moviesTotalLength}
            />
          </>
        ) : (
          <RatedPage
            movieGrade={movieGrade}
            rated={rated}
            handleCardRate={handleCardRate}
          />
        )}
      </main>
    );
  }
}

export default Main;
