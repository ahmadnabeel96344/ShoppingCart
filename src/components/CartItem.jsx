import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const CartItem = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount(  cart.reduce( (acc ,curr) => acc + curr.price,0))
  } , [cart])
  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {
              cart.map( (item,index) => {
                return <CartItem key={item.id} item={item} itemIndex={index} />
              })
            }
          </div>


          <div>
            <div>Your Cart</div>
            <div>Summary</div>

            <p>
              <span>Total Item : {cart.length}</span>
            </p>

            <p>Total Amount : ${totalAmount}</p>
            <button>
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Cart Empty</h1>
          <Link to={"/"}>
            <button> Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartItem;
