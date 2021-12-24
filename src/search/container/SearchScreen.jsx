import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { parse } from 'query-string';

import { useForm } from '../../shared/hooks/useForm';
import { handleSearch } from '../../UI/tools/handles';
import { getHeroByName } from './../../shared/selectors';

import HeroCard from './../../hero/components/HeroCard';

const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = parse(location.search);

  const { values, handleInputChange } = useForm({ searchText: q });

  const { searchText } = values;

  const { data, successfull } = useMemo(
    () => handleSearch(q, getHeroByName),
    [q],
  );

  const submitHero = (e, searchText) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };
  return (
    <div className="contaier mt-5">
      <h1 className="text-center mb-5">Search screen</h1>
      <div className="row">
        <div className="col-5">
          <h2>Search</h2>
          <hr />
          <form onSubmit={(e) => submitHero(e, searchText)}>
            <input
              type="text"
              placeholder="Search a Hero"
              className="form-control"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-primary mt-1" type="submit">
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          {!!successfull ? (
            <>
              <h2 className="text-center">Hero Result - ({data.length})</h2>
              <hr />
              <div className="animate__animated animate__fadeIn">
                {data.map((hero) => (
                  <HeroCard key={hero.id} {...hero} />
                ))}
              </div>
            </>
          ) : !q.length ? (
            <div className="mt-5">
              <hr />
              <div className="alert alert-info">Hero found...</div>
            </div>
          ) : (
            <div className="mt-5">
              <hr />
              <div className="alert alert-danger">Hero do not found...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
