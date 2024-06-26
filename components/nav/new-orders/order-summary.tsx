import { Separator } from "@/components/ui/separator";
import CardContainer from "./card-container";
import OrderSummaryItem from "./order-summary-item";
import { Button } from "@/components/ui/button";
import { ScrollText } from "lucide-react";
import { DialogClose } from "@/components/ui/dialog";

export default function OrderSummary() {
  return (
    <div className="col-span-4 flex flex-col gap-5">
      <CardContainer className="gap-3 pb-[30px]">
        <OrderSummaryItem
          label="Amount Due"
          value="$ 0.00"
          isHeading
          className="py-2"
        />
        <Separator className="bg-zinc-700" />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3 py-2">
            <OrderSummaryItem label="Booking Code" value="AAC0FE" />
            <OrderSummaryItem label="Booking ID" value="IP-4372-1501421737" />
          </div>
          <OrderSummaryItem label="Amount Paid" value="$ 20.00" />
        </div>
        <div className="flex flex-col gap-3 py-2">
          <OrderSummaryItem label="Subtotal" value="$ 20.00" />
          <OrderSummaryItem label="Grand Total" value="$ 20.00" />
        </div>
        <Separator className="bg-zinc-700" />
      </CardContainer>
      <CardContainer className="gap-3">
        <OrderSummaryItem
          label="Balance"
          value="$ 0.00"
          isHeading
          className="py-2"
        />
        <Separator />
        <div className="flex flex-col gap-3 py-2">
          <OrderSummaryItem label="Elroy Carreen" className="font-semibold" />
          <OrderSummaryItem label="Individual Balance" value="$ 0.00" />
        </div>
      </CardContainer>
      <Button
        className="bg-[#009BA5] text-white font-medium hover:bg-[#009BA5]/80"
        type="button"
      >
        <ScrollText className="mr-2" />
        View Invoice
      </Button>
      <Separator />
      <DialogClose asChild>
        <Button
          className="bg-[#575BC7] font-medium hover:bg-[#575BC7]/80"
          type="button"
        >
          Save Reservation
        </Button>
      </DialogClose>
    </div>
  );
}
