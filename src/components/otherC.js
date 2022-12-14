import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCountries, fetchCountries } from '../redux/configReducers';

function OtherC() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const countries = useSelector(getAllCountries);

  return (
    <div className="grid-grid">
      {
      countries.map((count) => (
        <Link to={`/countries/${count.name.common}`} key={count.name.common}>
          <div className="count-continer item">
            <div>
              <i className="fa-solid fa-arrow-circle-right c-arrow" aria-hidden="true" />
              {' '}
            </div>
            <div className="flag-symbol">
              <img src={count.flags.svg} alt="" />
            </div>
            <div className="information item">
              <h1>{count.name.common}</h1>
              <h2>
                Capital:
                <span>{count.capital}</span>
              </h2>

              <h2>
                Region:
                <span>{count.region}</span>
              </h2>

              <h2>
                Population:
                <span>{count.population}</span>
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
