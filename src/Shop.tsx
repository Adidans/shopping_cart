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

const SkeletonCard = () => (
    <Card className="w-full max-h-96">
        <CardHeader className="flex flex-row items-start gap-4 text-left">
            <div
                className="aspect-square object-cover flex-shrink-0 w-full rounded-lg overflow-hidden bg-gray-300 animate-pulse"
                style={{
                    height: "100px",
                    width: "100px",
                }}
            />
            <div className="grid gap-1 w-full">
                <div className="h-6 bg-gray-300 animate-pulse rounded-md" />
                <div className="h-4 bg-gray-300 animate-pulse rounded-md" />
            </div>
        </CardHeader>
        <CardContent className="grid gap-4">
            <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gray-300 animate-pulse rounded-md" />
                <div className="w-16 h-8 bg-gray-300 animate-pulse rounded-md" />
                <div className="w-8 h-8 bg-gray-300 animate-pulse rounded-md" />
            </div>
            <div className="h-10 bg-gray-300 animate-pulse rounded-md" />
        </CardContent>
    </Card>
);

const ITEM_COUNT = 30;

function Shop() {
    const [products, setProducts] = useState<Product[]>([]);
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        fetch(`https://fakestoreapi.com/products?limit=${ITEM_COUNT}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((response) => {
                setProducts(response);
                console.log(response);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="flex flex-col h-full w-full overflow-auto">
            <Navbar />
            {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center items-center text-center flex-grow p-5">
                    {Array(ITEM_COUNT)
                        .fill(null)
                        .map((_, index) => (
                            <SkeletonCard key={index} />
                        ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center items-center text-center flex-grow p-5">
                    {products.map((product) => {
                        const quantity = quantities[product.id] || 1;

                        return (
                            <Card className="w-full max-h-96" key={product.id}>
                                <CardHeader className="flex flex-row items-start gap-4 text-left">
                                    <img
                                        className="object-cover aspect-square w-full rounded-lg"
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                        }}
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
                                        <Button
                                            size="icon"
                                            variant="outline"
                                            onClick={() => {
                                                setQuantities({
                                                    ...quantities,
                                                    [product.id]: Math.max(
                                                        1,
                                                        quantity - 1
                                                    ),
                                                });
                                            }}
                                        >
                                            <MinusIcon className="w-4 h-4" />
                                            <span className="sr-only">
                                                Decrease quantity
                                            </span>
                                        </Button>
                                        <Input
                                            className="w-16 text-center"
                                            value={quantity}
                                            type="number"
                                            onChange={(e) =>
                                                setQuantities({
                                                    ...quantities,
                                                    [product.id]: Math.max(
                                                        1,
                                                        parseInt(e.target.value)
                                                    ),
                                                })
                                            }
                                        />
                                        <Button
                                            size="icon"
                                            variant="outline"
                                            onClick={() =>
                                                setQuantities({
                                                    ...quantities,
                                                    [product.id]: quantity + 1,
                                                })
                                            }
                                        >
                                            <PlusIcon className="w-4 h-4" />
                                            <span className="sr-only">
                                                Increase quantity
                                            </span>
                                        </Button>
                                    </div>
                                    <Button className="w-full">
                                        Add to Cart
                                    </Button>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Shop;
