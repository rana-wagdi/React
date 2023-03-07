import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiAction } from '../../store/ui-slice';
const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartCounter = useSelector((state=> state.cart.cart)) 

const show = ()=> {
  dispatch(uiAction.toggleShow())
}
  return (
    <button onClick={show} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartCounter}</span>
    </button>
  );
};

export default CartButton;
