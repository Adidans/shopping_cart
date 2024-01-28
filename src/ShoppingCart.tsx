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

function ShoppingCart() {
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
                            <TableRow>
                                <TableCell>
                                    <img
                                        alt="Product image"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src="/placeholder.svg"
                                        width="64"
                                    />
                                </TableCell>
                                <TableCell className="font-medium">
                                    Glimmer Lamps
                                </TableCell>
                                <TableCell>$50.00</TableCell>
                                <TableCell>
                                    <Input
                                        className="w-16 text-center"
                                        defaultValue="2"
                                        min="1"
                                        type="number"
                                    />
                                </TableCell>
                                <TableCell>$100.00</TableCell>
                                <TableCell>
                                    <Button size="icon" variant="outline">
                                        <TrashIcon className="h-4 w-4" />
                                        <span className="sr-only">Remove</span>
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <img
                                        alt="Product image"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src="/placeholder.svg"
                                        width="64"
                                    />
                                </TableCell>
                                <TableCell className="font-medium">
                                    Aqua Filters
                                </TableCell>
                                <TableCell>$30.00</TableCell>
                                <TableCell>
                                    <Input
                                        className="w-16 text-center"
                                        defaultValue="1"
                                        min="1"
                                        type="number"
                                    />
                                </TableCell>
                                <TableCell>$30.00</TableCell>
                                <TableCell>
                                    <Button size="icon" variant="outline">
                                        <TrashIcon className="h-4 w-4" />
                                        <span className="sr-only">Remove</span>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className="flex items-center justify-between mt-6">
                    <Button variant="outline">Continue Shopping</Button>
                    <div className="text-right">
                        <div className="text-sm text-gray-500">Total</div>
                        <div className="text-xl font-semibold">$130.00</div>
                    </div>
                </div>
                <Button className="mt-4">Proceed to Checkout</Button>
            </div>
        </>
    );
}

export default ShoppingCart;
