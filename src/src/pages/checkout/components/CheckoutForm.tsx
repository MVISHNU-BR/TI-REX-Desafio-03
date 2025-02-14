import { InputWithLabel } from "@/components/inputWithLabel/InputWithLabel";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function CheckoutForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      zipCode: "",
      countrRegion: "",
      streeAddress: "",
      town: "",
      province: "",
      addOnAddress: "",
      email: "",
      additionalInformation: "",
    },
  });
  const zipCode = watch("zipCode");

  useEffect(() => {
    if (zipCode && zipCode.length === 8) {
      fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (!data.erro) {
            setValue("streeAddress", data.logradouro);
            setValue("town", data.localidade);
            setValue("province", data.uf);
          }
        })
        .catch((error) => console.error("Erro ao buscar CEP:", error));
    }
  }, [zipCode, setValue]);

  const onSubmit = (data: any) => {
    console.log("FormData:", data);
    toast({
      title: "Your order has been sent.",
    });
    reset();
  };

  return (
    <div className=" max-w-[608px] w-full h-[1714px] px-16 pt-9 mt-16 flex flex-col gap-8">
      <h1 className="font-semibold text-4xl">Billind Details</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-9 ">
        <div className="flex  gap-8">
          <InputWithLabel
            placeholder=""
            labelText="First Name"
            inputType="text"
            htmlFor="firstName"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <span className="text-red-500">First name is required</span>
          )}
          <InputWithLabel
            placeholder=""
            labelText="Last Name"
            inputType="text"
            htmlFor="lastName"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <span className="text-red-500">First name is required</span>
          )}
        </div>
        <div>
          <InputWithLabel
            placeholder=""
            labelText="Company Name (optional)"
            inputType="text"
            htmlFor="companyName"
            {...register("companyName")}
          />
        </div>
        <div>
          <InputWithLabel
            placeholder=""
            labelText="Zip code"
            inputType="text"
            htmlFor="zipCode"
            {...register("zipCode", { required: true })}
          />
          {errors.zipCode && (
            <span className="text-red-500">Zip Code is required</span>
          )}
        </div>
        <div>
          <InputWithLabel
            placeholder=""
            labelText="Country / Region"
            inputType="text"
            htmlFor="contryRegion"
            {...register("countrRegion", { required: true })}
          />
          {errors.countrRegion && (
            <span className="text-red-500">Country or Region is required</span>
          )}
        </div>
        <div>
          <InputWithLabel
            placeholder=""
            labelText="Street address"
            inputType="text"
            htmlFor="streeAddress"
            {...register("streeAddress", { required: true })}
          />
          {errors.streeAddress && (
            <span className="text-red-500">Street address is required</span>
          )}
        </div>
        <div>
          <InputWithLabel
            placeholder=""
            labelText="Town / City"
            inputType="text"
            htmlFor="town"
            {...register("town", { required: true })}
          />
          {errors.town && (
            <span className="text-red-500">Town or City is required</span>
          )}
        </div>
        <div>
          <InputWithLabel
            placeholder=""
            labelText="Province"
            inputType="text"
            htmlFor="province"
            {...register("province", { required: true })}
          />
          {errors.province && (
            <span className="text-red-500">Province is required</span>
          )}
        </div>
        <div>
          <InputWithLabel
            placeholder=""
            labelText="Add-on address"
            inputType="text"
            htmlFor="addOnAddress"
            {...register("addOnAddress", { required: true })}
          />
          {errors.addOnAddress && (
            <span className="text-red-500">Add-on address is required</span>
          )}
        </div>
        <div>
          <InputWithLabel
            placeholder=""
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
          <div>
            <InputWithLabel
              placeholder="Additional information"
              labelText=""
              inputType="text"
              htmlFor="additionalInformation"
              {...register("additionalInformation")}
            />
          </div>
        </div>
        <div></div>
      </form>
    </div>
  );
}
