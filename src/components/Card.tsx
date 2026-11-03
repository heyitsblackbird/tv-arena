type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({children, className}:CardProps){
    return (
        <div className={`rounded-3xl bg-surface p-6 shadow-lg shadow-black/5 ${className ?? ""}`}>
            {children}
        </div>
    );
}