import React from 'react';
import Advantages from "../components/Advantages";
import ProductsCatalog from "../components/ProductsCatalog";
import CatalogFilter from "../components/CatalogFilter";
import Breadcrumbs from "../components/Breadcrumbs";

const Catalog = () => {
  return (
    <>
      <Breadcrumbs/>
      <section className="catalog container">
        <CatalogFilter/>
        <ProductsCatalog/>
      </section>
      <Advantages/>
    </>
  );
};

export default Catalog;