import FormTextField, {
  FormTextFieldProps,
} from "@/components/form/form-text-field";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

export default function OrderSectionProcessRates() {
  const shipperForm = useForm();

  const shipperFormFields: Omit<FormTextFieldProps, "form">[] = [
    {
      name: "vol",
      type: "text",
      label: "Vol (kg)",
    },
    {
      name: "currency",
      type: "text",
      label: "Currency",
    },
    {
      name: "rate",
      type: "text",
      label: "Rate",
    },
    {
      name: "s_rate",
      type: "text",
      label: "S Rate",
    },
    {
      name: "s_freight",
      type: "text",
      label: "S Freight",
    },
    {
      name: "spot_id",
      type: "text",
      label: "Spot ID",
    },
    {
      name: "gs_wt",
      label: "GS WT.KG",
      type: "text",
    },
    {
      name: "ch_wt",
      label: "CH WT.KG",
      type: "text",
    },
    {
      name: "amt_due",
      label: "Amt Due",
      type: "text",
      endIcon: <ListBulletIcon />,
    },
  ];

  return (
    <Form {...shipperForm}>
      <form className="grid grid-cols-2 gap-x-8 gap-y-5">
        {shipperFormFields.map((field) => {
          return (
            <div
              key={field.name}
              className={cn("", {
                "col-span-2": field.name === "amt_due",
              })}
            >
              <FormTextField {...field} form={shipperForm} />
            </div>
          );
        })}
      </form>
    </Form>
  );
}
