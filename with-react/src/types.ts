export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type Lesson = {
    id: number;
    title: string;
    durationMinutes: number;
    level: CourseLevel;
    completed: boolean;
};

export type NewLesson = Omit<Lesson, "id" | "completed">;

export type LoadState =
    | { status: "idle" }
    | { status: "loading" }
    | { status: "success"; message: string }
    | { status: "error"; message: string };
