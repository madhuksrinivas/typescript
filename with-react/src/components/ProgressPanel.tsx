import Panel from "./Panel";

type ProgressPanelProps = {
    completedCount: number;
    totalCount: number;
};

function ProgressPanel({ completedCount, totalCount }: ProgressPanelProps) {
    return (
        <Panel title="Conditional Rendering">
            <p>
                Completed: {completedCount} / {totalCount}
            </p>
            {completedCount === totalCount ? <strong>All lessons are complete.</strong> : <span>Keep going.</span>}
        </Panel>
    );
}

export default ProgressPanel;
