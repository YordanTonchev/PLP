export const Product = ({ name, thumbnail, price }) => {
  return (
    <div className="product">
      <img src={thumbnail} alt={name} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button>Buy Now</button>
    </div>
  );
};


