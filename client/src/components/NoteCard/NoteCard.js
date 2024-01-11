import DeleteIcon from '../../assets/icons/icon-delete.svg'
import "./NoteCard.scss";

export default function NoteCard({ title, date }) {
  return (
    <article className="note-card">
      <h3 className="note-card__title">{title}</h3>
      <h4 className="note-card__title">{date}</h4>
      <button className="note-card__delete-button">DELETE</button>
    </article>
  );
}
