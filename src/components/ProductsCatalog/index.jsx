import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCatalogItems} from "../../redux/catalogSlice";
import CatalogItem from "../CatalogItem";


const Catalog = () => {
  const dispatch = useDispatch();
  const {items, loading, error} = useSelector((state) => state.catalogItems);
  const {type, sizes, trendingNow, minPrice, maxPrice} = useSelector((state) => state.catalogFilter);

  const generateQueryParams = () => {
    const params = new URLSearchParams();

    if (sizes.length > 0) {
      sizes.forEach(size => params.append("size", size));
    }
    if (trendingNow) {
      params.append("trending_now", trendingNow);
    }
    if (minPrice !== null) {
      params.append("min_price", minPrice);
    }
    if (maxPrice !== null) {
      params.append("max_price", maxPrice);
    }

    if (type !== '') {
      params.append("type", type);
    }

    return params.toString();
  };

  useEffect(() => {
    const queryParams = generateQueryParams();
    dispatch(fetchCatalogItems(`https://lepihov.by/api-fashion-shop/catalog?${queryParams}`));
  }, [sizes, trendingNow, minPrice, maxPrice]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="catalogItems">
      {items.map((item) => (
        <CatalogItem key={item.id} item={item}/>
      ))}
    </div>
  );
};

export default Catalog;