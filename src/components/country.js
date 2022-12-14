import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailsCountry, getchoosenCountry } from '../redux/configReducers';

function Country() {
  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailsCountry(name));
  }, [name, dispatch]);

  const dataCountry = useSelector(getchoosenCountry);

  return (
    <>
      {
         dataCountry && (
         <div className="iden-country">
           <Link to="/">
             <button type="button" className="new-button">
               {' '}
               <i className="fa-solid fa-arrow-left-long" aria-hidden="true" />
               {' '}
               Return
             </button>
           </Link>

           <div className="country-country">
             <i className="fa-solid fa-circle-arrow-right" aria-hidden="true" />
             {' '}
             <div className="country-mark">
               <img src={dataCountry[0]?.flags?.svg} alt="country flag" />
             </div>

             <div className="info-country">
               <div className="data-info">
                 <div className="data-data">
                   <h1>{dataCountry[0]?.name.common}</h1>
                   <h2>
                     Capital:
                     <span>
                       {dataCountry[0]?.capital[0]}
                     </span>
                   </h2>

                   <h2>
                     Region:
                     <span>
                       {dataCountry[0]?.region}
                     </span>
                   </h2>

                   <h2>
                     Population:
                     <span>
                       {dataCountry[0]?.population}
                     </span>
                   </h2>

                   <h2>
                     Sub-Region:
                     <span>
                       {dataCountry[0]?.subregion}
                     </span>
                   </h2>

                   <h2>
                     Continent:
                     <span>
                       {dataCountry[0]?.continents[0]}
                     </span>
                   </h2>
                 </div>

               </div>
             </div>

           </div>
         </div>
         )
    }
    </>
  );
}

export default Country;
