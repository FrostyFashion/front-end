import "./ProductDisplay.css";
import star_icon from "../../Assets/star_icon.png";
import star_dull_icon from "../../Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="image-list">
          <img src={product.image} alt="product image" />
          <img src={product.image} alt="product image" />
          <img src={product.image} alt="product image" />
          <img src={product.image} alt="product image" />
        </div>
        <div className="display-image">
          <img className="main-image" src={product.image} alt="product ima" />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="display-right-star">
          <img src={star_icon} alt="stars" />
          <img src={star_icon} alt="stars" />
          <img src={star_icon} alt="stars" />
          <img src={star_icon} alt="stars" />
          <img src={star_dull_icon} alt="stars" />
          <p>555</p>
        </div>
        <div className="right-prices">
          <div className="old-price">{product.old_price}</div>
          <div className="new-price">{product.new_price}</div>
        </div>
        <div className="right-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, sint
          iusto atque nulla qui similique, perferendis ad quae quidem eveniet
          error molestiae deserunt impedit. Ullam recusandae eum rerum maxime
          velit in consectetur dolore. Quidem sequi unde atque totam fugit
          rerum.
        </div>
        <div className="product-size">
          <h1>Select size</h1>
          <div className="product-right-sizes">
            <div className="mydiv">S</div>
            <div className="mydiv">M</div>
            <div className="mydiv">L</div>
            <div className="mydiv">XL</div>
            <div className="mydiv">XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="display-right-category">
          <span>Cagegory :</span>Women, T-Shirt Crop Top
        </p>
        <p className="display-right-category">
          {" "}
          <span>Tags :</span>Moderm, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
