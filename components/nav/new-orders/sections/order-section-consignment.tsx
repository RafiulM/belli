import FormTextField from "@/components/form/form-text-field";
import { Form } from "@/components/ui/form";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";

export default function OrderSectionConsignment() {
  const hookForm = useForm();

  return (
    <Form {...hookForm}>
      <form className="grid grid-cols-2 gap-x-8 gap-y-5">
        <FormTextField
          form={hookForm}
          name="origin"
          label="Origin"
          required
          type="select"
          options={[
            {
              label: "Option 1",
              value: "option1",
            },
            {
              label: "Option 2",
              value: "option2",
            },
          ]}
        />
        <FormTextField
          name="destination"
          label="Destination"
          type="text"
          form={hookForm}
          endIcon={<MagnifyingGlassIcon />}
        />
      </form>
    </Form>
  );
}
