import { useEffect, useState } from "react";
import LoadStatePanel from "./components/LoadStatePanel";
import LessonsPanel from "./components/LessonsPanel";
import NewLessonPanel from "./components/NewLessonPanel";
import ProgressPanel from "./components/ProgressPanel";
import { initialLessons } from "./data/lessons";
import type { Lesson, LoadState, NewLesson } from "./types";

function App() {
    const [lessons, setLessons] = useState<Lesson[]>(initialLessons);
    const [loadState, setLoadState] = useState<LoadState>({ status: "idle" });

    const completedCount = lessons.filter((lesson) => lesson.completed).length;

    useEffect(() => {
        document.title = `${completedCount}/${lessons.length} React TS lessons done`;
    }, [completedCount, lessons.length]);

    function toggleCompleted(lessonId: number) {
        setLessons((currentLessons) =>
            currentLessons.map((lesson) =>
                lesson.id === lessonId ? { ...lesson, completed: !lesson.completed } : lesson,
            ),
        );
    }

    function addLesson(lesson: NewLesson) {
        setLessons((currentLessons) => [
            ...currentLessons,
            {
                id: Date.now(),
                completed: false,
                ...lesson,
            },
        ]);
    }

    function simulateLoading() {
        setLoadState({ status: "loading" });

        window.setTimeout(() => {
            setLoadState({ status: "success", message: "Typed data loaded successfully." });
        }, 600);
    }

    return (
        <main className="app-shell">
            <header className="hero">
                <p>TypeScript With React</p>
                <h1>Learn the React basics with clear TypeScript types.</h1>
            </header>

            <div className="layout">
                <LessonsPanel lessons={lessons} onToggleCompleted={toggleCompleted} />
                <NewLessonPanel onAddLesson={addLesson} />
                <ProgressPanel completedCount={completedCount} totalCount={lessons.length} />
                <LoadStatePanel loadState={loadState} onLoadData={simulateLoading} />
            </div>
        </main>
    );
}

export default App;
