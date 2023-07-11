"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { FormatCurrency } from "@/utils/formatCurrency";
import { ReverseCurrencyNumbered } from "@/utils/reverseFormatCurrency";
import React from "react";
import { z } from "zod";

const quotaFormSchema = z.object({
  quota: z.string().min(1),
  yd: z.string().min(1),
});

type FormQuotaCalculatorProps = z.infer<typeof quotaFormSchema>;

export const FormQuotaCalculator = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm<FormQuotaCalculatorProps>({
    resolver: zodResolver(quotaFormSchema),
  });

  const [quotas, setQuotas] = useState<number>();
  const [investment, setInvestment] = useState<string>("");

  const onSubmit = (data: FormQuotaCalculatorProps) => {
    const newQuota = ReverseCurrencyNumbered(data.quota);
    const newYd = ReverseCurrencyNumbered(data.yd);

    setQuotas(Math.floor(Number(newQuota) / Number(newYd)));

    const investment =
      Math.floor(Number(newQuota) / Number(newYd)) * Number(newQuota);

    const investmentFormatted = Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(investment);

    setInvestment(investmentFormatted);
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        quota: "",
        yd: "",
      });
    }
  }, [formState.isSubmitSuccessful, reset]);

  return (
    <>
      <form
        className=" md:flex justify-between items-center xs:flex-col grid gap-4 xs:w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-y-1">
          <label htmlFor="quota">Preço da ação</label>
          <input
            {...register("quota")}
            placeholder="R$ 10,00"
            className="w-full h-14 bg-slate-50 rounded-lg placeholder:text-gray-400 text-slate-500 p-4 
            focus:outline-none focus:ring-2 ring-teal-600"
            id="quota"
            inputMode="numeric"
            autoComplete="cc-number"
            onChange={(e) => {
              const { value } = e.target;
              e.target.value = FormatCurrency(value);
            }}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="yd">Valor do dividendo (Yd)</label>
          <input
            placeholder="R$ 0,10"
            className="w-full h-14 bg-slate-50 rounded-lg placeholder:text-gray-400 text-slate-500 p-4 
            focus:outline-none focus:ring-2 ring-teal-700"
            id="yd"
            inputMode="numeric"
            autoComplete="cc-number"
            {...register("yd")}
            onChange={(e) => {
              const { value } = e.target;
              e.target.value = FormatCurrency(value);
            }}
          />
        </div>
        <div className="flex self-end w-[244px]">
          <button
            type="submit"
            className="w-full bg-teal-600 text-white hover:bg-teal-500 h-14 rounded-lg font-normal transition-all hover:ring-2 ring-teal-700"
          >
            Calcular
          </button>
        </div>
      </form>

      {investment && (
        <div className="flex justify-center items-center">
          <div className="shadow-2xl rounded-lg bg-teal-600  px-8 py-4">
            <div className="flex flex-col ">
              <div className="text-white inline-flex">
                O magic Number:{" "}
                <span className="text-slate-700 ml-2">
                  {quotas} cotas | ações
                </span>
              </div>
              <div className="text-white inline-flex">
                Investimento:{" "}
                <span className="text-slate-700 ml-2"> {investment}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
