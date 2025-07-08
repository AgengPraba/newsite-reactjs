import { useLoaderData, useNavigate } from "react-router-dom";

const fallbackImg = "../../public/assets/missing-photo.jpg";
import { formatDistanceToNow } from "date-fns";

function HomePage() {
  const { topHeadlines, latestNews, page, totalPages, category } = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <figure>
            <img
              className="rounded-xl w-full h-64 object-cover"
              src={topHeadlines[0]?.urlToImage || fallbackImg}
              onError={(e) => (e.target.src = fallbackImg)}
              alt={topHeadlines[0]?.title}
            />
          </figure>
          <div className="font-semibold badge badge-outline text-red-700 mt-3 mb-1">Hot News</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{topHeadlines[0]?.title}</h2>
          <p className="text-gray-400">{topHeadlines[0]?.description}</p>
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          {topHeadlines.slice(1).map((article, i) => (
            <div key={i} className="flex gap-3 items-stretch">
              <figure className="w-32 aspect-[4/3] flex-shrink-0 overflow-hidden rounded">
                <img
                  className="object-cover w-full h-full"
                  src={article.urlToImage || fallbackImg}
                  onError={(e) => (e.target.src = fallbackImg)}
                  alt={article.title}
                />
              </figure>
          
              <div className="flex flex-col flex-1">
                <div className="font-semibold text-red-700 text-sm">{ category }</div>
                <div className="text-md font-semibold">{article.title}</div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-5">Latest News</h2>
        <div className="space-y-4">
          {latestNews.map((article, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-3 mb-5">
              <figure className="w-full sm:w-40 h-40 sm:h-24 flex-shrink-0 overflow-hidden rounded">
                <img
                  className="object-cover w-full h-full"
                  src={article.urlToImage || fallbackImg}
                  onError={(e) => (e.target.src = fallbackImg)}
                  alt={article.title}
                />
              </figure>
              <div className="mt-[-4px] flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-semibold text-red-700">{category}</div>
                  <div className="text-sm">{formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}</div>
                </div>
                <div className="text-xl font-bold">{article.title}</div>
                <div className="text-gray-400">{article.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-6 items-center">
          <button
            className="btn btn-outline"
            disabled={page <= 1}
            onClick={() => navigate(`/?page=${page - 1}`)}
          >
            Prev
          </button>
          <span className="text-sm text-gray-400 ml-2">
            Page {page} of {totalPages}
          </span>
          <button
            className="btn btn-outline"
            disabled={page >= totalPages}
            onClick={() => navigate(`/?page=${page + 1}`)}
          >
            Next
          </button>

        </div>
      </div>
    </div>
  );
}

export default HomePage;
