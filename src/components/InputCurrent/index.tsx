import { FormatCurrency } from "@/utils/formatCurrency";
import { InputHTMLAttributes } from "react";

type InputCurrentProps = InputHTMLAttributes<HTMLInputElement>;

export const InputCurrent = (props: InputCurrentProps) => {
  return (
    <input
      {...props}
      inputMode="numeric"
      autoComplete="cc-number"
      className="w-full h-14 bg-slate-50 rounded-lg placeholder:text-gray-400 text-slate-500 p-4 
            focus:outline-none focus:ring-2 ring-teal-600"
      onChange={(e) => {
        const { value } = e.target;
        e.target.value = FormatCurrency(value);
      }}
    />
  );
};
