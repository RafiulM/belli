import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SquarePen } from "lucide-react";

interface OrderNavItemProps {
  icon: React.ReactNode;
  title: string;
  active: boolean;
  onClick?: () => void;
}

export default function OrderNavItem({
  icon,
  title,
  active,
  onClick,
}: OrderNavItemProps) {
  return (
    <Button
      className={cn(
        "text-zinc-500 w-full justify-start gap-3 items-center p-3",
        {
          "text-white": active,
        }
      )}
      onClick={onClick}
    >
      <span className="flex items-center justify-center w-5 h-5 [&_svg]:stroke-[1.5]">
        {icon}
      </span>
      <span className="font-medium"> {title}</span>
    </Button>
  );
}
