export function changePercent(today: number | null, yesterday: number | null): number | null {
    if(today === null || yesterday === null || yesterday === 0) {
        return null;
    }
    return (today - yesterday) / yesterday * 100;
}