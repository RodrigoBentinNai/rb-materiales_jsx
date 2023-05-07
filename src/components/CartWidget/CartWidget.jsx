import Badge from 'react-bootstrap/Badge';
import cart from './assets/carrito.jpg'

const styles = {
    img: {
        height: 30
    }
}

const CartWidget = () => {
    return (
        <Badge bg="light">
            <img src={cart} alt="imagen de carrito de compras" style={styles.img} />
            <span>0</span>
        </Badge>
    )
}

export default CartWidget