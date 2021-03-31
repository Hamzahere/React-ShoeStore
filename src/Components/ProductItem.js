import { useParams } from "react-router-dom";
import Shoes from "./../shoes.json";

function ProductItem() {
  const { id } = useParams();

  const shoe = Shoes[id];
  console.log(shoe);

  if (!shoe) {
    return <h2>Whoops Our Bad...</h2>;
  } else {
    return (
      <div>
        <div className="link">
          <h4>{shoe["name"]}</h4>
          <img src={shoe["img"]} height={500} alt="shoe"></img>
        </div>
        <h3>Welcome to Product Item</h3>
      </div>
    );
  }
}

export default ProductItem;
