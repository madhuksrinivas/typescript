import type { ReactNode } from "react";

type PanelProps = {
    title: string;
    children: ReactNode;
};

function Panel({ title, children }: PanelProps) {
    return (
        <section className="panel">
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Panel;
