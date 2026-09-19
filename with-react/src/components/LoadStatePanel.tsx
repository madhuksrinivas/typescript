import type { LoadState } from "../types";
import Panel from "./Panel";

type LoadStatePanelProps = {
    loadState: LoadState;
    onLoadData: () => void;
};

function LoadStatePanel({ loadState, onLoadData }: LoadStatePanelProps) {
    return (
        <Panel title="Discriminated Union State">
            <p>A union type makes loading, success, and error states easier to handle.</p>
            <button type="button" onClick={onLoadData} disabled={loadState.status === "loading"}>
                Load Typed Data
            </button>

            {loadState.status === "idle" && <p>No request started.</p>}
            {loadState.status === "loading" && <p>Loading...</p>}
            {loadState.status === "success" && <p>{loadState.message}</p>}
            {loadState.status === "error" && <p>{loadState.message}</p>}
        </Panel>
    );
}

export default LoadStatePanel;
