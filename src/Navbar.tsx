import { Link } from "react-router-dom";
import { StoreIcon, HomeIcon, ShoppingBag, ShoppingCart } from "lucide-react";

function Navbar() {
    return (
        <div className="w-full flex justify-center items-center gap-4 p-5 shadow-lg">
            <Link to="/home">
                <StoreIcon />
            </Link>
            <Link to="/home" className="flex items-center gap-2 ml-auto">
                <HomeIcon />
                Home
            </Link>
            <Link to="/shop" className="flex items-center gap-2">
                <ShoppingBag />
                Shop
            </Link>
            <Link to="/cart" className="flex items-center gap-2">
                <ShoppingCart />
                Shopping Cart
            </Link>
        </div>
    );
}

export default Navbar;
