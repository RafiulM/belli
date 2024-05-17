import FormTextField, {
  FormTextFieldProps,
} from "@/components/form/form-text-field";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Calendar, Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function OrderSectionShipperDetails() {
  const shipperForm = useForm();

  const shipperFormFields: Omit<FormTextFieldProps, "form">[] = [
    {
      name: "select",
      type: "select",
      label: "Select",
      options: [
        {
          label: "Truck",
          value: "truck",
        },
        {
          label: "Train",
          value: "train",
        },
        {
          label: "Plane",
          value: "plane",
        },
        {
          label: "Ship",
          value: "ship",
        },
      ],
    },
    {
      name: "origin",
      type: "text",
      label: "Origin",
      endIcon: <MagnifyingGlassIcon />,
      required: true,
    },
    {
      name: "destination",
      type: "text",
      label: "Destination",
      endIcon: <MagnifyingGlassIcon />,
      required: true,
    },
    {
      name: "partner_type",
      type: "select",
      label: "Partner Type",
      options: [
        {
          label: "Option 1",
          value: "option1",
        },
        {
          label: "Option 2",
          value: "option2",
        },
        {
          label: "Option 3",
          value: "option3",
        },
      ],
    },
    {
      name: "partner_code",
      type: "select",
      label: "Partner Code",
      options: [
        {
          label: "Option 1",
          value: "option1",
        },
        {
          label: "Option 2",
          value: "option2",
        },
        {
          label: "Option 3",
          value: "option3",
        },
      ],
    },
    {
      name: "date",
      type: "text",
      label: "Date",
      required: true,
      endIcon: <Calendar />,
    },
    {
      name: "flight_code",
      type: "text",
      label: "Flight Code",
      required: true,
    },
    {
      name: "allotment_code",
      type: "text",
      label: "Allotment Code",
    },
    {
      name: "awb_status",
      type: "select",
      label: "AWB Status",
      options: [
        {
          label: "Option 1",
          value: "option1",
        },
        {
          label: "Option 2",
          value: "option2",
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex absolute -top-[35px] -left-[1px] gap-2 items-center">
        <Button className="hover:bg-zinc-600 rounded-bl-none rounded-br-none border border-zinc-700 border-b-0 h-[35px] text-zinc-500">
          Route 1
        </Button>
        <Button size="icon" className="p-1 min-w-0 h-5 w-5">
          <Plus size={16} />
        </Button>
      </div>

      <Form {...shipperForm}>
        <form className="flex flex-col w-full gap-5">
          <div className="grid grid-cols-2 gap-x-8 gap-y-5">
            {shipperFormFields.map((field) => {
              return (
                <div
                  key={field.name}
                  className={cn("", {
                    "col-span-2": field.name === "awb_status",
                  })}
                >
                  <FormTextField {...field} form={shipperForm} hideTooltip />
                </div>
              );
            })}
          </div>
          <Separator />
          <div className="flex gap-5">
            <Button
              className="bg-[#575BC7] hover:bg-[#575BC7]/80 w-full"
              type="button"
            >
              <Plus className="mr-2" size={16} />
              New Route
            </Button>
            <Button
              size="icon"
              className="bg-[#575BC7] hover:bg-[#575BC7]/80 w-11"
              type="button"
            >
              <Trash strokeWidth={1.5} size={18} />
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
