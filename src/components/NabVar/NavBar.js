import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>eCommerce</h3>
            <div>
                <button>Celulares</button>
                <button>Vehiculos</button>
                <button>Televisores</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar