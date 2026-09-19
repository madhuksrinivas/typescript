import type { Lesson } from "../types";
import Badge from "./Badge";

type LessonItemProps = {
    lesson: Lesson;
    onToggleCompleted: (lessonId: number) => void;
};

function LessonItem({ lesson, onToggleCompleted }: LessonItemProps) {
    return (
        <li className={lesson.completed ? "lesson lesson-complete" : "lesson"}>
            <div>
                <strong>{lesson.title}</strong>
                <p>{lesson.durationMinutes} minutes</p>
            </div>
            <Badge level={lesson.level} />
            <button type="button" onClick={() => onToggleCompleted(lesson.id)}>
                {lesson.completed ? "Done" : "Mark Done"}
            </button>
        </li>
    );
}

export default LessonItem;
