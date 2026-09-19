import type { NewLesson } from "../types";
import NewLessonForm from "./NewLessonForm";
import Panel from "./Panel";

type NewLessonPanelProps = {
    onAddLesson: (lesson: NewLesson) => void;
};

function NewLessonPanel({ onAddLesson }: NewLessonPanelProps) {
    return (
        <Panel title="State, Events, and Forms">
            <p>useState can hold strings, numbers, arrays, objects, and union types.</p>
            <NewLessonForm onAddLesson={onAddLesson} />
        </Panel>
    );
}

export default NewLessonPanel;
