import "./DisplayedNote.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DisplayedNote() {
    const [note, setNote] = useState(null);

    useEffect(() => {
        setNote({
            title: 'Test Title',
            content: 'Test content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet eum inventore incidunt pariatur eligendi quas quibusdam, placeat molestiae, quis consequatur sequi non tenetur optio unde possimus, modi ducimus voluptatibus!',
            date: '01/11/2024'
        })
    }, []);

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
            <div className="displayed-note__header">
                <div className="displayed-note__title-and-date">
                    <input className="displayed-note__title" type="text" placeholder="Title" />
                    <h4 className="displayed-note__date">{date}</h4>
                </div>
                <button className="displayed-note__save-button">SAVE</button>
            </div>
            <textarea className="displayed-note__content" name="content" id="content" cols="30" rows="10" placeholder="Enter your note here!"></textarea>
        </section>
    );
}
