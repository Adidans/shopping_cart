import { Link } from "react-router-dom";
import { StoreIcon, HomeIcon, ShoppingBag, ShoppingCart } from "lucide-react";

function Navbar() {
    return (
        <div className="w-full flex justify-center items-center gap-4 p-5 shadow-lg">
            <Link to="/home">
                <StoreIcon />
            </Link>
            <Link
                to="/home"
                className="flex items-center gap-2 ml-auto text-sm md:text-base"
            >
                <HomeIcon className="hidden sm:block" />
                Home
            </Link>
            <Link
                to="/shop"
                className="flex items-center gap-2 text-sm md:text-base"
            >
                <ShoppingBag className="hidden sm:block" />
                Shop
            </Link>
            <Link
                to="/cart"
                className="flex items-center gap-2 text-sm md:text-base"
            >
                <ShoppingCart className="hidden sm:block" />
                Shopping Cart
            </Link>
        </div>
    );
}

export default Navbar;
