import { cn } from "@/lib/utils";

interface OrderSummaryItemProps {
  label: string;
  value?: string;
  isHeading?: boolean;
  className?: string;
}

export default function OrderSummaryItem({
  label,
  value,
  isHeading = false,
  className
}: OrderSummaryItemProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between w-full font-medium text-zinc-500",
        {
          "text-white font-semibold text-xl": isHeading,
        },
        className
      )}
    >
      <span> {label}</span>
      <span className="text-right font-normal">{value}</span>
    </div>
  );
}
