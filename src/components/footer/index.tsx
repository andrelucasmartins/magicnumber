interface FooterProps {}

import { IoMdHeart } from "react-icons/io";

export const Footer = (props: FooterProps) => {
  return (
    <footer className="px-24 flex justify-between items-center py-6 bg-slate-700 text-white">
      <p>
        Copyright &copy; {new Date().getFullYear()} - AE Digi Solutions Todos os
        direitos reservados.
      </p>
      <span className="inline-flex items-baseline gap-2">
        Feito com <IoMdHeart size={13} className="text-emerald-500" /> para você
      </span>
    </footer>
  );
};
