import React, { InputHTMLAttributes } from "react";
import { useForm, Controller, FieldValues } from "react-hook-form";


type InputCurrentProps = InputHTMLAttributes<HTMLInputElement>;


interface FormData extends FieldValues {
  currencyValue: string;
}


export const InputCurrent = (props: InputCurrentProps) => {

  const { setValue } = useForm<FormData>();  

  const formatCurrency = (value: string) => {
    // Remove non-digit characters
    const numericValue = value.replace(/\D/g, "");

    // Format currency with BRL mask
    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(numericValue) / 100);

    setValue("currencyValue", formattedValue, { shouldValidate: true });
  };

  return (
    <div>
      <input
        {...props}
        value={currencyValue}
        className="w-full h-14 bg-slate-50 rounded-lg placeholder:text-gray-400 text-slate-500 p-4 
            focus:outline-none focus:ring-2 ring-teal-600"
        onChange={(e) => formatCurrency(e.target.value)}
      />
    </div>
  );
};
