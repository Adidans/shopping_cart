import Navbar from "./Navbar";
import {
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
    TableBody,
    Table,
} from "@/components/ui/table";
import { Button } from "./components/ui/button";
import { TrashIcon } from "lucide-react";
import { Input } from "./components/ui/input";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

function ShoppingCart() {
    const context = useContext(CartContext);

    if (!context) {
        return null;
    }

    const { cart, setCart, removeFromCart } = context;

    const updateQuantity = (productId: number, quantity: number) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex(
                (p) => p.id === productId
            );
            if (existingProductIndex !== -1) {
                const newCart = [...prevCart];
                newCart[existingProductIndex] = {
                    ...newCart[existingProductIndex],
                    quantity: quantity,
                };
                return newCart;
            } else {
                return prevCart;
            }
        });
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col gap-6 p-5">
                <h1 className="font-semibold text-lg md:text-2xl">
                    Shopping Cart
                </h1>
                <div className="border shadow-sm rounded-lg">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[80px]">
                                    Image
                                </TableHead>
                                <TableHead className="max-w-[150px]">
                                    Product
                                </TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead>Total</TableHead>
                                <TableHead />
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Object.values(cart).map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>
                                        <img
                                            alt="Product image"
                                            className="aspect-square rounded-md object-cover"
                                            height="64"
                                            src={product.image}
                                            width="64"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {product.title}
                                    </TableCell>
                                    <TableCell>
                                        ${product.price.toFixed(2)}
                                    </TableCell>
                                    <TableCell>
                                        <Input
                                            className="w-16 text-center"
                                            defaultValue={product.quantity}
                                            min="1"
                                            type="number"
                                            onChange={(e) => {
                                                const newQuantity = Number(
                                                    e.target.value
                                                );
                                                updateQuantity(
                                                    product.id,
                                                    newQuantity
                                                );
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        $
                                        {(
                                            product.price * product.quantity
                                        ).toFixed(2)}
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            size="icon"
                                            variant="outline"
                                            onClick={() => {
                                                removeFromCart(product.id);
                                            }}
                                        >
                                            <TrashIcon className="h-4 w-4" />
                                            <span className="sr-only">
                                                Remove
                                            </span>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex items-center justify-between mt-6">
                    <Button variant="outline">
                        <Link to="/shop">Continue Shopping</Link>
                    </Button>
                    <div className="text-right">
                        <div className="text-sm text-gray-500">Total</div>
                        <div className="text-xl font-semibold">
                            $
                            {Object.values(cart)
                                .reduce(
                                    (total, product) =>
                                        total +
                                        product.price * product.quantity,
                                    0
                                )
                                .toFixed(2)}
                        </div>
                    </div>
                </div>
                <Button className="mt-4">Proceed to Checkout</Button>
            </div>
        </>
    );
}

export default ShoppingCart;
