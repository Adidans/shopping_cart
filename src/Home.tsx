import Navbar from "./Navbar.tsx";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="flex flex-col h-full">
            <Navbar />
            <div className="flex flex-col justify-center items-center flex-grow text-center gap-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    Welcome to Our Shop
                </h1>
                <p className="max-w-md text-gray-500 md:text-xl md:max-w-lg">
                    We offer a wide range of high-quality products. Explore our
                    collection and find the perfect item for you.
                </p>
                <Button className="px-8" asChild>
                    <Link to="/shop">Shop Now</Link>
                </Button>
            </div>
        </div>
    );
}

export default Home;
