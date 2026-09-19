import type { Lesson } from "../types";
import LessonItem from "./LessonItem";

type LessonListProps = {
    lessons: Lesson[];
    onToggleCompleted: (lessonId: number) => void;
};

function LessonList({ lessons, onToggleCompleted }: LessonListProps) {
    return (
        <ul className="lesson-list">
            {lessons.map((lesson) => (
                <LessonItem key={lesson.id} lesson={lesson} onToggleCompleted={onToggleCompleted} />
            ))}
        </ul>
    );
}

export default LessonList;
