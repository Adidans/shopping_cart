import Navbar from "./Navbar";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Input } from "./components/ui/input";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

function Shop() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=20")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((response) => {
                setProducts(response);
                console.log(response);
            });
    }, []);

    return (
        <div className="flex flex-col h-full w-full overflow-auto">
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center items-center text-center flex-grow p-5">
                {products.map((product) => (
                    <Card className="w-full max-h-96" key={product.id}>
                        <CardHeader className="flex flex-row items-start gap-4 text-left">
                            <img
                                className="object-cover w-full rounded-lg"
                                style={{ width: "100px", height: "100px" }}
                                src={product.image}
                                alt="Product image"
                            />
                            <div className="grid gap-1">
                                <CardTitle className="overflow-hidden whitespace-nowrap overflow-ellipsis">
                                    {product.title}
                                </CardTitle>
                                <CardDescription className="text-lg font-bold">
                                    ${product.price.toFixed(2)}
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="flex items-center gap-4">
                                <Button size="icon" variant="outline">
                                    <MinusIcon className="w-4 h-4" />
                                    <span className="sr-only">
                                        Decrease quantity
                                    </span>
                                </Button>
                                <Input
                                    className="w-16 text-center"
                                    defaultValue="1"
                                    type="number"
                                />
                                <Button size="icon" variant="outline">
                                    <PlusIcon className="w-4 h-4" />
                                    <span className="sr-only">
                                        Increase quantity
                                    </span>
                                </Button>
                            </div>
                            <Button className="w-full">Add to Cart</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Shop;
