import { FormQuotaCalculator } from "../components/FormQuotaCalculator/index";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen gap-y-20 items-center p-24 md:p-16 text-white">
      <div className="flex items-center">
        <h1 className="uppercase text-2xl">Calculador magic number</h1>
      </div>
      <FormQuotaCalculator />
    </main>
  );
}
