type EmptyStateProps = {
    message: string;
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="py-12 text-center text-muted text-sm">
      <p>{message}</p>
    </div>
  );
}