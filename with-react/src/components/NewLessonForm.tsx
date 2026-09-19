import { useState, type ChangeEvent, type FormEvent } from "react";
import type { CourseLevel, NewLesson } from "../types";

type NewLessonFormProps = {
    onAddLesson: (lesson: NewLesson) => void;
};

function NewLessonForm({ onAddLesson }: NewLessonFormProps) {
    const [title, setTitle] = useState<string>("");
    const [durationMinutes, setDurationMinutes] = useState<number>(30);
    const [level, setLevel] = useState<CourseLevel>("Beginner");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!title.trim()) {
            return;
        }

        onAddLesson({
            title: title.trim(),
            durationMinutes,
            level,
        });

        setTitle("");
        setDurationMinutes(30);
        setLevel("Beginner");
    }

    function handleDurationChange(event: ChangeEvent<HTMLInputElement>) {
        setDurationMinutes(Number(event.target.value));
    }

    function handleLevelChange(event: ChangeEvent<HTMLSelectElement>) {
        setLevel(event.target.value as CourseLevel);
    }

    return (
        <form className="lesson-form" onSubmit={handleSubmit}>
            <label>
                Lesson title
                <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="React props" />
            </label>

            <label>
                Duration
                <input type="number" min="5" value={durationMinutes} onChange={handleDurationChange} />
            </label>

            <label>
                Level
                <select value={level} onChange={handleLevelChange}>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                </select>
            </label>

            <button type="submit">Add Lesson</button>
        </form>
    );
}

export default NewLessonForm;
