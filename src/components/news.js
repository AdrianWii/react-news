import "./news.css";

export function News({ title }) {
  return (
    <div className="news">
      <h3>{title}</h3>
      <p>DESCRIPTION</p>

      <button>LIKE</button>
      <button>DISLIKE</button>
    </div>
  );
}
