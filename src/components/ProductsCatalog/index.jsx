import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCatalogItems} from "../../redux/catalogSlice";
import CatalogItem from "../CatalogItem";

const Catalog = () => {
  const dispatch = useDispatch();
  const {items, loading, error} = useSelector((state) => state.catalogItems);

  useEffect(() => {
    dispatch(fetchCatalogItems("http://lepihov.by/api-fashion-shop/catalog"));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {items.map((item) => (
        <CatalogItem key={item.id} item={item}/>
      ))}
    </>
  );
};

export default Catalog;