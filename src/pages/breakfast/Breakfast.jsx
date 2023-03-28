import React from "react";
import { useFetch } from "../../useFetch";

function Breakfast() {
  const { data, error, loader } = useFetch(
    "https://msshohruh.github.io/api-menu/db.json",
    "breakfast"
  );

  if (loader) {
    return (
      <div className='loader'>
        <div className='lds-hourglass'></div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div className='section-center'>
      {data &&
        data.map((item) => {
          const { img, title, price, desc, id } = item;
          return (
            <div className='menu-item' key={id}>
              <div className='foots'>
                <img src={img} alt={title} className='photo' />
              </div>
              <div className='item-info'>
                <header>
                  <h4>{title}</h4>
                  <h4 className='price'>{price}</h4>
                </header>
                <p className='item-text'>{desc}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Breakfast;
