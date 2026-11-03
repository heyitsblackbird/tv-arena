type SplitBarProps = {
    shareA: number;
    shareB: number;
};

export function SplitBar({ shareA, shareB }: SplitBarProps) {

    return (
        <div className="flex h-3 gap-0.5">
            <div className="bg-accent rounded-l-full" style={{width: shareA*100 + "%"}}></div>
            <div className="bg-sage rounded-r-full" style={{width: shareB*100 + "%"}}></div>
        </div>
    );
}