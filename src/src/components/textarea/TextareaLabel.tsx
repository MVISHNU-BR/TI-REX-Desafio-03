import { forwardRef } from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { TextareaWithLabelProps } from "./textareaWithLabel";

export const TextareaLabel = forwardRef<
  HTMLTextAreaElement,
  TextareaWithLabelProps
>(({ labelText, htmlFor, placeholder, className, ...props }, ref) => {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor={htmlFor}>{labelText}</Label>
      <Textarea
        ref={ref}
        className={className}
        maxLength={300}
        placeholder={placeholder}
        id={htmlFor}
        {...props}
      />
    </div>
  );
});
