"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";

const quatoFormSchema = z.object({
  quota: z.string().min(1),
  yd: z.string().min(1),
});

type FormQuotaCalculatorProps = z.infer<typeof quatoFormSchema>;

export const FormQuotaCalculator = () => {
  const { handleSubmit, register } = useForm<FormQuotaCalculatorProps>({
    resolver: zodResolver(quatoFormSchema),
  });

  const onSubmit = (data: FormQuotaCalculatorProps) => {
    console.log(data);
  };

  return (
    <form
      className=" md:flex justify-between items-center xs:flex-col grid gap-4 xs:w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-y-1">
        <label htmlFor="quota">Preço da ação</label>
        <input
          placeholder="R$ 10,00"
          className="w-full h-14 bg-slate-50 rounded-lg placeholder:text-gray-400 text-slate-500 p-4 
            focus:outline-none focus:ring-2 ring-teal-600"
          id="quota"
          {...register("quota")}
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <label htmlFor="yd">Valor do dividendo (Yd)</label>
        <input
          placeholder="R$ 0,10"
          className="w-full h-14 bg-slate-50 rounded-lg placeholder:text-gray-400 text-slate-500 p-4 
            focus:outline-none focus:ring-2 ring-teal-700"
          id="yd"
          {...register("yd")}
        />
      </div>
      <div className="flex self-end w-[244px]">
        <button className="w-full bg-teal-600 hover:bg-teal-500 h-14 rounded-lg font-normal transition-all hover:ring-2 ring-teal-700">
          Calcular
        </button>
      </div>
    </form>
  );
};
