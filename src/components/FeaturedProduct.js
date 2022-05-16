import React from "react";
import "./FeaturedProduct.css";
import "./Home.css";
// import f1 from "./img/products/f1.jpg";
// import f2 from "./img/products/f2.jpg";
// import f3 from "./img/products/f3.jpg";
// import f4 from "./img/products/f4.jpg";
// import f5 from "./img/products/f5.jpg";
// import f6 from "./img/products/f6.jpg";
// import f7 from "./img/products/f7.jpg";
// import f8 from "./img/products/f8.jpg";
import { useStateValue } from "./StateProvider";

function FeaturedProduct({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToCart = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        id: id,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div>


{/* <div className="pro">
            <img src={f2} alt="p1" />
            <div className="des">
              <span>{title}</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <h4>Rs. 350</h4>
            </div>
            <a href="">
              {" "}
              <i className="fa fa-shopping-cart cart" onClick={addToCart}/>{" "}
            </a>
          </div> */}


      
      <div className="product">
        {/* <div className="product__info"> */}
          <img src={image} />
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        {/* </div> */}

        

        <button onClick={addToCart}>Add to Cart</button>
      </div>

      {/* <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collections Modern Design</p>
        <div className="pro-container">
          <div className="pro">
            <img src={f1} alt="p1" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <h4>Rs. 350</h4>
            </div>
            <a href="">
              {" "}
              <i className="fa fa-shopping-cart cart" onClick={addToCart} />{" "}
            </a>
          </div>
          <div className="pro">
            <img src={f2} alt="p1" />
            <div className="des">
              <span>{title}</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <h4>Rs. 350</h4>
            </div>
            <a href="">
              {" "}
              <i className="fa fa-shopping-cart cart" onClick={addToCart}/>{" "}
            </a>
          </div>
          <div className="pro">
            <img src={f3} alt="p1" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <h4>Rs. 350</h4>
            </div>
            <a href="">
              {" "}
              <i className="fa fa-shopping-cart cart" onClick={addToCart}/>{" "}
            </a>
          </div>
          <div className="pro">
            <img src={f4} alt="p1" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <h4>Rs. 350</h4>
            </div>
            <a href="">
              {" "}
              <i className="fa fa-shopping-cart cart" onClick={addToCart}/>{" "}
            </a>
          </div>
          <div className="pro">
            <img src={f5} alt="p1" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <h4>Rs. 350</h4>
            </div>
            <a href="">
              {" "}
              <i className="fa fa-shopping-cart cart"onClick={addToCart} />{" "}
            </a>
          </div>
          <div className="pro">
            <img src={f6} alt="p1" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <h4>Rs. 350</h4>
            </div>
            <a href="">
              {" "}
              <i className="fa fa-shopping-cart cart" onClick={addToCart} />{" "}
            </a>
          </div>
          <div className="pro">
            <img src={f7} alt="p1" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <h4>Rs. 350</h4>
            </div>
            <a href="">
              {" "}
              <i className="fa fa-shopping-cart cart" onClick={addToCart}/>{" "}
            </a>
          </div>
          <div className="pro">
            <img src={f8} alt="p1" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <h4>Rs. 350</h4>
            </div>
            <a href="">
              {" "}
              <i className="fa fa-shopping-cart cart" onClick={addToCart} />{" "}
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default FeaturedProduct;
