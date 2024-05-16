import { cn } from "@/lib/utils";

interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardContainer({
  children,
  className,
}: CardContainerProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-md border border-zinc-700 p-4",
        className
      )}
    >
      {children}
    </div>
  );
}
