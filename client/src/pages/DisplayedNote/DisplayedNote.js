import "./DisplayedNote.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DisplayedNote() {
  const [note, setNote] = useState(null);

  useEffect(() => {});

  if (!note) {
    return (
      <section className="displayed-note">
        <p>No Note Selected</p>
      </section>
    );
  }

  const { title, date, content } = note;
  return (
    <section className="displayed-note">
      <h2 className="displayed-note__title">{title}</h2>
      <h4 className="displayed-note__date">{date}</h4>
      <p className="displayed-note__content">{content}</p>
    </section>
  );
}
