import React from "react";
import FeaturedProduct from "./FeaturedProduct";
// import "./Home.css";
import "./FeaturedProduct.css";
import f1 from "./img/products/f1.jpg";
import f2 from "./img/products/f2.jpg";
import f3 from "./img/products/f3.jpg";
import f4 from "./img/products/f4.jpg";
import f5 from "./img/products/f5.jpg";
import f6 from "./img/products/f6.jpg";
import f7 from "./img/products/f7.jpg";
import f8 from "./img/products/f8.jpg";
function FeaturedImage() {
  return (
    <>
      {/* <Header/> */}
      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collections Modern Design</p>
        </section>
      <div className="home">
        <div className="home__container">
          <div className="home__row  ">
            <FeaturedProduct
              id="12321341"
              title="Stylish Shirt"
              price={11.96}
              rating={5}
              image={f1}
            />
            <FeaturedProduct
              id="49538094"
              title="Stylish Shirt"
              price={239.0}
              rating={4}
              image={f2}
            />

            <FeaturedProduct
              id="4903850"
              title="Stylish Shirt"
              price={199.99}
              rating={3}
              image={f3}
            />
            <FeaturedProduct
              id="23445930"
              title="Stylish Shirt"
              price={98.99}
              rating={5}
              image={f4}
            />
            <FeaturedProduct
              id="3254354345"
              title="Stylish Shirt"
              price={598.99}
              rating={4}
              image={f5}
            />

            <FeaturedProduct
              id="90829332"
              title="Stylish Shirt"
              price={1094.98}
              rating={2}
              image={f6}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedImage;
