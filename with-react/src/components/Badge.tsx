import type { CourseLevel } from "../types";

type BadgeProps = {
    level: CourseLevel;
};

function Badge({ level }: BadgeProps) {
    return <span className={`badge badge-${level.toLowerCase()}`}>{level}</span>;
}

export default Badge;
