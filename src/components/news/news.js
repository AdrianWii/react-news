import "./news.css";

export function News({ title, description }) {
  return (
    <div className="news">
      <h3>{title}</h3>
      <p>{description}</p>

      <button>LIKE</button>
      <button>DISLIKE</button>
    </div>
  );
}
