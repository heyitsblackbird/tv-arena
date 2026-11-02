function formatNumber(value: number): string {
    return new Intl.NumberFormat("en-US").format(value);
}

function formatCompact(value: number): string {
    return new Intl.NumberFormat("en-US", { notation: "compact" }).format(value);
}

function formatPercent(value: number): string {
    const sign = value >= 0 ? "+" : "";
    return sign + value.toFixed(1) + "%";
}

export { formatNumber, formatCompact, formatPercent };