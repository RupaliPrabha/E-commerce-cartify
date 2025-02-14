import React, { useState, useEffect, useRef } from "react";
// import { useActionState } from 'react';
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

function Products() {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setLoading] = useState(false);

  const isMounted = useRef(true); // Use a ref instead of let for componentMounted

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (isMounted.current) {
          const products = await response.json();
          setdata(products);
          setfilter(products);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        if (isMounted.current) setLoading(false);
      }
    };

    getProducts();

    // Cleanup function to update isMounted
    return () => {
      isMounted.current = false;
    };
  }, []); // Dependency array is empty as no external dependencies are used

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setfilter(updatedList);
  };
  // const ShowProducts = () => {
  //   return (
  //     <>
  //       <div className="buttons d-flex justify-content-center mb-5  pb-5">
  //         <button
  //           className="btn btn-outline-dark me-2"
  //           onClick={() => setfilter(data)}
  //         >
  //           All
  //         </button>
  //         <button
  //           className="btn btn-outline-dark me-2"
  //           onClick={() => filterProduct("men's clothing")}
  //         >
  //           Men's Clothing
  //         </button>
  //         <button
  //           className="btn btn-outline-dark me-2"
  //           onClick={() => filterProduct("women's clothing")}
  //         >
  //           Women's Clothing
  //         </button>
  //         <button
  //           className="btn btn-outline-dark me-2"
  //           onClick={() => filterProduct("jewelery")}
  //         >
  //           Jwellery
  //         </button>
  //         <button
  //           className="btn btn-outline-dark me-2"
  //           onClick={() => filterProduct("electronics")}
  //         >
  //           Electronic
  //         </button>
  //       </div>
  //       {filter.map((product) => {
  //         return (
  //           <>
  //             <div className="col-md-3 mb-4 "
  //             key={product.id}>
  //               <div className="card h-100 text-center p-4" >
  //                 <img
  //                   src={product.image}
  //                   className="card-img-top"
  //                   alt={product.title}
  //                   height="250px"
  //                 />
  //                 <div className="card-body">
  //                   <h5 className="card-title mb-0">
  //                     {product.title.substring(0, 12)}...
  //                   </h5>
  //                   <p className="card-text lead fw-bold ">${product.price}</p>
  //                   <NavLink to={`/products/${product.id}`}>
  //                     <button className="btn btn-outline-dark"> Buy Now</button>
  //                   </NavLink>
  //                 </div>
  //               </div>
  //             </div>
  //           </>
  //         );
  //       })}
  //     </>
  //   );
  // };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setfilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jwellery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        {filter.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 text-center p-4">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                height="250px"
              />
              <div className="card-body">
                <h5 className="card-title mb-0">
                  {product.title.substring(0, 12)}...
                </h5>
                <p className="card-text lead fw-bold ">${product.price}</p>
                <NavLink
                  to={`/products/${product.id}`}
                  className="btn btn-outline-dark"
                >
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className=" display-6 fw-bolder text-center">
              Latest Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Products;
