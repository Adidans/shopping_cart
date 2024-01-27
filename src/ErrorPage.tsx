import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-full flex flex-col justify-center items-center bg-gray-100 gap-8">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                Oops!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
                The page you're looking for was not found.
            </p>
            <Button asChild className="px-8">
                <Link to="/">Return to Homepage</Link>
            </Button>
        </div>
    );
};

export default ErrorPage;
