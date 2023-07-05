interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <section className="bg-slate-700 px-24 py-6">
      <div className="flex justify-between items-end uppercase text-lg text-white transition-all">
        <a href="http://" className="hover:text-gray-200">
          magic Number
        </a>
        <a href="http://" className="hover:text-gray-200">
          follow me
        </a>
      </div>
    </section>
  );
};
