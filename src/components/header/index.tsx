import Link from "next/link";

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <section className="bg-slate-700 px-24 py-6">
      <div className="flex justify-between items-end uppercase text-lg text-white transition-all">
        <Link href="/" className="hover:text-gray-200">
          magic Number
        </Link>
        <Link
          href="https://www.facebook.com/aedigisolutions"
          className="hover:text-gray-200"
        >
          follow me
        </Link>
      </div>
    </section>
  );
};
