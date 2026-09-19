import type { Lesson } from "../types";
import LessonList from "./LessonList";
import Panel from "./Panel";

type LessonsPanelProps = {
    lessons: Lesson[];
    onToggleCompleted: (lessonId: number) => void;
};

function LessonsPanel({ lessons, onToggleCompleted }: LessonsPanelProps) {
    return (
        <Panel title="Component Props">
            <p>Props are typed with an object type, then passed into the component.</p>
            <LessonList lessons={lessons} onToggleCompleted={onToggleCompleted} />
        </Panel>
    );
}

export default LessonsPanel;
