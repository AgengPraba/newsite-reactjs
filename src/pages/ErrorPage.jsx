import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  let statusCode = 500;
  let message = "An unexpected error occurred.";
  let code = "UNKNOWN_ERROR";

  if (error instanceof Response) {
    console.error("Error response:", error);
    statusCode = error.statusCode;
    message = error.statusText || "Unknown Error";
  } else if (error instanceof Error) {
    statusCode = error.status
    message = error.message;
    code = error.code || "UNKNOWN_ERROR";
    console.error("Error message:", error);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">{statusCode}</h1>
        <p className="mt-4 text-xl text-gray-700">{message}</p>
        <p className="mt-2 text-sm text-gray-500">Error Code: {code}</p>


        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;
