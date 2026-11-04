export default function Loading() {
    return (
        <div className="flex flex-col gap-3">
            {Array.from({ length: 10 }).map((_, index) => (
                <div key ={index} className="h-16 rounded-2xl bg-black/5 animate-pulse"/>
            ))}

        </div>
    )
}