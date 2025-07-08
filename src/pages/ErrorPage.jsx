function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-xl text-gray-700">Page Not Found</p>
        <p className="mt-2 text-gray-500">The page you are looking for does not exist.</p>
        <button>
          <a href="/" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
            Go to Home
          </a>
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;