import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchFeaturedItems} from "../../redux/feturedSlice";
import CatalogItem from "../CatalogItem";
import {NavLink} from "react-router-dom";
import {addProduct} from '../../redux/cartSlice';
import {useApi} from "../../contexts/apiContext";

const Fetured = () => {
  const dispatch = useDispatch();
  const {items, loading, error} = useSelector((state) => state.featuredItems);

  const apiUrl = useApi();

  useEffect(() => {
    dispatch(fetchFeaturedItems(`${apiUrl}/fetured`));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="feturedItems container">
      <h1>Featured Items</h1>
      <p className="description">Shop for items based on what we featured this week</p>
      <div className="catalogItems">
        {items.map((item) => (
          <CatalogItem key={item.id} item={item}/>
        ))}
      </div>
      <div className="feturedItems__buttons">
        <NavLink to={`${process.env.PUBLIC_URL}/catalog`}>
          <button id="catalogButton" className="feturedItems__allButton">Browse All Products</button>
        </NavLink>
      </div>
    </section>
  );
};

export default Fetured;