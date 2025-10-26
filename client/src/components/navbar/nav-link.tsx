import { Link } from "@tanstack/react-router";
import { cn } from "../../lib/utils";

interface NavLinkProps {
  to: string;
  label: string;
  isMobile?: boolean;
}

const NavLink = ({ to, label, isMobile }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        isMobile
          ? "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          : "items-center py-2 text-lg font-semibold"
      )}
    >
      {label}
    </Link>
  );
};

export default NavLink;
