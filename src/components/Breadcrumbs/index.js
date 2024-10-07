import React from 'react';
import {useSelector} from "react-redux";

const Breadcrumbs = () => {
  const {
    sizes,
    trendingNow,
    maxPrice,
    minPrice,
    type,
    category,
    brand,
    designer
  } = useSelector((state) => state.catalogFilter);

  const breadcrumbs = [];
  breadcrumbs.push('HOME');
  if (brand) breadcrumbs.push(brand.toUpperCase());
  if (designer) breadcrumbs.push(designer.toUpperCase());
  if (type) breadcrumbs.push(type.toUpperCase());
  if (category) breadcrumbs.push(category.toUpperCase());

  return (
    <div className="breadсrumbs">
      <div className="container">
        <div className="breadсrumbs__leftSide">
          <p>{breadcrumbs[breadcrumbs.length - 1].toLocaleUpperCase()}</p>
        </div>
        <div className="breadсrumbs__rightSide">
          <p>
            {breadcrumbs.slice(0, -1).join(' / ')}
            {breadcrumbs.length > 1 && (
              <>
                &nbsp;/ <span>{breadcrumbs[breadcrumbs.length - 1]}</span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;