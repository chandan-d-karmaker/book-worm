import { Link, useNavigate, useRouteError } from "react-router";


const ErrorElement = () => {
    const error = useRouteError();
    const navigate = useNavigate();


    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                {/* Decorative Element */}
                <p className="text-6xl font-black text-indigo-600 animate-bounce">
                    {error.status || "!"}
                </p>

                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    {error.statusText || "Something went wrong"}
                </h1>

                <p className="mt-6 text-base leading-7 text-gray-600 max-w-md mx-auto">
                    {error.status === 404
                        ? "Sorry, we couldn't find the page you're looking for. It might have been moved or deleted."
                        : "An unexpected error occurred. Our team has been notified and we're working on it."}
                </p>

                {/* Technical Detail (Subtle) */}
                <p className="mt-2 text-xs font-mono text-gray-400">
                    Error Message: {error.data || error.message}
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all"
                    >
                        Go Back
                    </button>

                    <Link
                        to="/"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline hover:focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
                    >
                        Take me Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorElement;