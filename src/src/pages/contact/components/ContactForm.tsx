import { InputWithLabel } from "@/components/inputWithLabel/InputWithLabel";
import { TextareaLabel } from "@/components/textarea/TextareaLabel";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("FormData:", data);
    toast({
      title: "Your message has been sent.",
    });
    reset();
  };

  return (
    <div className="flex flex-col gap-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-9"
      >
        <div>
          <InputWithLabel
            placeholder="Abc"
            labelText="Your Name"
            inputType="text"
            htmlFor="name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}
        </div>
        <div>
          <InputWithLabel
            placeholder="Abc@def.com"
            labelText="Email address"
            inputType="text"
            htmlFor="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/, message: "Invalid email format" },
            })}
          />
          {errors.email && (
            <span className="text-red-500">{String(errors.email.message)}</span>
          )}
        </div>

        <div>
          <InputWithLabel
            placeholder="This is an optional"
            labelText="Subject"
            inputType="text"
            htmlFor="subject"
            {...register("subject")}
          />
        </div>
        <div>
          <TextareaLabel
            htmlFor="message"
            placeholder="Hi! I’d like to ask about"
            labelText="Message"
            className="max-w-[528px] w-full h-[120px] max-h-[150px]"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <span className="text-red-500">
              {String(errors.message.message)}
            </span>
          )}
        </div>

        <Button type="submit" className="rounded-sm font-normal w-[247px] mt-3">
          Submit
        </Button>
      </form>
    </div>
  );
}
