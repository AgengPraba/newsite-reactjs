import { useLocation, useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const fallbackImg = "../../public/assets/missing-photo.jpg";

function ContentBlogPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article || location.state;

  if (!article) return <div className="text-center py-10">Failed to load news</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button onClick={() => navigate(-1)} className="btn btn-sm btn-outline mb-4">
        ← back
      </button>

      <div className="card bg-base-100 shadow-xl">
        <figure className="max-h-[400px] overflow-hidden">
          <img
            src={article.image || fallbackImg}
            alt={article.title}
            className="w-full object-cover"
            onError={(e) => (e.target.src = fallbackImg)}
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-3xl">{article.title}</h2>
          <div className="text-sm text-gray-400 flex flex-row justify-between">
            <div>{article.source.name }</div>
            <div>{formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true})}</div>
          </div>

          <p className="mt-4 leading-relaxed text-base-content">{article.content || article.description}</p>

          <div className="card-actions justify-end mt-6">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentBlogPage;
