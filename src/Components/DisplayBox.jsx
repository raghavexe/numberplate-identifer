import "./DisplayBox.css";

export default function DisplayBox({ title, children }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div class="content-holder"> {children}</div>
      </div>
    </div>
  );
}
