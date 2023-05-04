import Link from "next/link";

const Header = () => {
  const navClassname = "select-none cursor-pointer hover:text-slate-400";

  return (
    <div className="w-full h-20 px-5 py-3 flex flex-row justify-between items-center bg-slate-950">
      <Link href="/">
        <h1 className="text-white text-xl sm:text-4xl font-bold select-none cursor-pointer">
          Lord Of King
        </h1>
      </Link>
      <div className="flex flex-col gap-1 text-sm text-white font-semibold sm:flex-row sm:gap-4 sm:text-lg">
        <Link href="/Movies" className={navClassname}>
          Movies
        </Link>
        <Link href="/Characters" className={navClassname}>
          Characters
        </Link>
        <Link href="/Quotes" className={navClassname}>
          Quotes
        </Link>
      </div>
    </div>
  );
};

export default Header;
