import {formatPercent} from "@/lib/format/number";
type ChangeBadgeProps = {
    change: number | null;
};

export function ChangeBadge({ change }: ChangeBadgeProps) {
    if(change === null){
        return (
            <div className="text-xs text-muted">
                —
            </div>
        );
    }
    else if (change >= 0) {
        return (
            <div className="text-xs text-up">
                ▲ {formatPercent(change).replace("+", "")}
            </div>
        );
    }
    else{
        return (
            <div className="text-xs text-accent">
                ▼ {formatPercent(Math.abs(change)).replace("+", "")}
            </div>
        );
    }
}