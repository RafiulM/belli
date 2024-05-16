import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import {
  Clock2,
  Maximize2,
  Package,
  Plane,
  SquarePen,
  User,
} from "lucide-react";
import CardContainer from "./card-container";
import OrderNavItem from "./order-nav-item";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import OrderSummary from "./order-summary";

export default function OrdersModal() {
  const [activeContent, setActiveContent] = useState<string>("create-booking");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon">
          <PencilSquareIcon className="h-5 w-5 text-white" aria-hidden="true" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-900 border-zinc-700 max-w-7xl w-full gap-10 max-h-[95dvh] h-full">
        <DialogTitle className="text-2xl">New Orders</DialogTitle>
        <Maximize2 className="absolute top-4 right-[72px] w-6 h-6 text-white opacity-70" />
        <div className="grid grid-cols-12 gap-5 h-[80dvh] overflow-auto">
          <CardContainer className="col-span-3 p-0 gap-1">
            <OrderNavItem
              icon={<SquarePen />}
              title="Create Booking"
              active={activeContent === "create-booking"}
              onClick={() => setActiveContent("create-booking")}
            />
            <OrderNavItem
              icon={<Plane />}
              title="Consignment Detail"
              active={activeContent === "consignment-detail"}
              onClick={() => setActiveContent("consignment-detail")}
            />
            <OrderNavItem
              icon={<User />}
              title="Shipper Details"
              active={activeContent === "shipper-details"}
              onClick={() => setActiveContent("shipper-details")}
            />
            <OrderNavItem
              icon={<Package />}
              title="Process Rates"
              active={activeContent === "process-rates"}
              onClick={() => setActiveContent("process-rates")}
            />
            <Separator className="bg-zinc-700" />
            <OrderNavItem
              icon={<Clock2 />}
              title="Activity Log"
              active={false}
            />
          </CardContainer>
          <OrderSummary />
        </div>
      </DialogContent>
    </Dialog>
  );
}
