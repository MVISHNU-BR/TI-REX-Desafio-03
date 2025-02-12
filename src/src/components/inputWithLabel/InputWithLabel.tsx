import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { inputWithLabelProps } from "./inputWithLabe";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export const InputWithLabel = forwardRef<HTMLInputElement, inputWithLabelProps>(
  (
    { labelText, htmlFor, inputType, placeholder, className, ...props },
    ref
  ) => {
    return (
      <div className="grid w-full items-center gap-5">
        <Label className="font-medium text-base" htmlFor={htmlFor}>
          {labelText}
        </Label>
        <Input
          ref={ref}
          type={inputType}
          id={htmlFor}
          placeholder={placeholder}
          className={cn(
            "h-[75px] max-w-[528px] w-full text-base font-normal text-secondFadeGray",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
