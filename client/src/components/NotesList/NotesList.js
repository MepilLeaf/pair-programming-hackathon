import NoteCard from "../NoteCard/NoteCard";
import "./NotesList.scss";

export default function NotesList() {
  return (
    <section className="notes-list">
      <NoteCard title="this is a title" date="1/11/11" />;
    </section>
  );
}
