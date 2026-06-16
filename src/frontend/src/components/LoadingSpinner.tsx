interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
}

export default function LoadingSpinner({
  size = "md",
  text,
}: LoadingSpinnerProps) {
  const sizeClasses = { sm: "w-5 h-5", md: "w-8 h-8", lg: "w-12 h-12" };
  return (
    <div
      className="flex flex-col items-center justify-center gap-3"
      data-ocid="loading.spinner"
    >
      <div
        className={`${sizeClasses[size]} border-2 border-muted border-t-primary rounded-full animate-spin`}
      />
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  );
}
