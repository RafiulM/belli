import { FormCheckbox } from "@/components/form/form-checkbox";
import FormTextField, {
  FormTextFieldProps,
} from "@/components/form/form-text-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { RefreshCcw } from "lucide-react";
import { useForm } from "react-hook-form";

export default function OrderSectionBooking() {
  const bookingForm = useForm();

  const bookingFormFields: Omit<FormTextFieldProps, "form">[] = [
    {
      name: "booking_type",
      type: "select",
      label: "Booking Type",
      options: [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
      ],
    },
    {
      name: "partner_prefix",
      type: "select",
      label: "Partner Prefix",
      options: [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
      ],
    },
    {
      name: "awb",
      type: "select",
      label: "AWB#",
      options: [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
      ],
    },
    {
      name: "Partner Code",
      type: "select",
      label: "Partner Code",
      options: [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
      ],
      required: true,
    },
  ];

  return (
    <Form {...bookingForm}>
      <form className="flex flex-col gap-6">
        {bookingFormFields.map((field) => {
          return (
            <FormTextField key={field.name} {...field} form={bookingForm} />
          );
        })}
        <div className="flex gap-5 items-center">
          <FormCheckbox form={bookingForm} label="Is Physical" />
          <Button
            size="icon"
            className="bg-[#575BC7] hover:bg-[#575BC7]/80"
            type="button"
          >
            <MagnifyingGlassIcon className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            className="bg-[#575BC7] hover:bg-[#575BC7]/80"
            type="button"
          >
            <RefreshCcw className="w-5 h-5" strokeWidth={1.5} />
          </Button>
        </div>
      </form>
    </Form>
  );
}
