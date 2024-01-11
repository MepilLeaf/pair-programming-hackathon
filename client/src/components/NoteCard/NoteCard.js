import "./NoteCard.scss";

export default function NoteCard({ title, date }) {
  return (
    <article className="note-card">
      <h2 className="note-card__title">{title}</h2>
      <h2 className="note-card__title">{date}</h2>
    </article>
  );
}
