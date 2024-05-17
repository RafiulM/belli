import FormTextField, {
  FormTextFieldProps,
} from "@/components/form/form-text-field";
import { Form } from "@/components/ui/form";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";

export default function OrderSectionConsignment() {
  const hookForm = useForm();

  const consignmentFormFields: FormTextFieldProps[] = [
    {
      name: "origin",
      type: "select",
      label: "Origin",
      required: true,
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
      form: hookForm,
    },
    {
      name: "destination",
      type: "text",
      label: "Destination",
      endIcon: <MagnifyingGlassIcon />,
      form: hookForm,
      required: true,
    },
    {
      name: "commodity_code",
      type: "text",
      label: "Commodity Code",
      form: hookForm,
      endIcon: <MagnifyingGlassIcon />,
      required: true,
    },
    {
      name: "commodity_description",
      type: "text",
      label: "Commodity Description",
      form: hookForm,
      required: true,
    },
    {
      name: "payment_mode",
      type: "text",
      label: "Payment Mode",
      form: hookForm,
    },
    {
      name: "bill_to",
      type: "text",
      label: "Bill To",
      form: hookForm,
    },
    {
      name: "bill_to_name",
      type: "text",
      label: "Bill To Name",
      form: hookForm,
    },
    {
      name: "shipper",
      type: "text",
      label: "Shipper",
      form: hookForm,
      hasList: true,
    },
    {
      name: "consignee",
      type: "text",
      label: "Consignee",
      form: hookForm,
      hasList: true,
    },
    {
      name: "customer",
      type: "text",
      label: "Customer",
      form: hookForm,
      hasList: true,
    },
    {
      name: "customer_name",
      type: "select",
      label: "Customer Name",
      form: hookForm,
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
    {
      name: "pieces",
      type: "select",
      label: "Pieces",
      form: hookForm,
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
    {
      name: "gross_weight",
      type: "text",
      label: "Gross Weight (kg)",
      form: hookForm,
      required: true,
    },
    {
      name: "freight_forwarder",
      type: "text",
      label: "Freight Forwarder",
      form: hookForm,
      endIcon: <MagnifyingGlassIcon />,
    },
  ];

  return (
    <Form {...hookForm}>
      <form className="grid grid-cols-2 gap-x-8 gap-y-5">
        {consignmentFormFields.map((field) => {
          return <FormTextField key={field.name} {...field} />;
        })}
      </form>
    </Form>
  );
}
