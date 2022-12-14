import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCountries, fetchCountries } from '../redux/configReducers';

function OtherC() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const count = useSelector(getAllCountries);

  return (
    <div className="grid-grid">
      {
      count.map((country) => (
        <Link to={`/count/${country.name.common}`} key={country.name.common}>
          <div className="count-continer item">
            <div>
              <i className="fa-solid fa-arrow-circle-right c-arrow" aria-hidden="true" />
              {' '}
            </div>
            <div className="flag-symbol">
              <img src={country.flags.svg} alt="" />
            </div>
            <div className="information item">
              <h1>{country.name.common}</h1>
              <h2>
                Capital:
                <span>{country.capital}</span>
              </h2>

              <h2>
                Region:
                <span>{country.region}</span>
              </h2>

              <h2>
                Population:
                <span>{country.population}</span>
              </h2>

            </div>
          </div>
        </Link>
      ))
}
    </div>
  );
}

export default OtherC;
