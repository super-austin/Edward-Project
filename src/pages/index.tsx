//  External Dependencies
import Link from "next/link";

const Landing = () => {
  const cardClassName =
    "w-56 px-4 py-4 border-2 border-white hover:border-slate-800 hover:bg-slate-100 rounded-lg flex flex-col gap-4 select-none cursor-pointer transition-all";
  const cardTitle =
    "text-lg text-slate-900 font-bold underline underline-offset-4";
  return (
    <main className="w-full flex justify-center">
      <div className="container h-full pt-10 sm:pt-40 pb-40 px-10 flex flex-col justify-between items-center gap-10">
        <h1 className="text-4xl sm:text-7xl text-center">
          Welcome to Lord Of King Explorer
        </h1>
        <div className="flex flex-wrap justify-center mt-8 sm:mt-0 gap-5 sm:gap-32 pb-10">
          <Link href="/Movies" className={cardClassName}>
            <h2 className={cardTitle}>Movie</h2>
            <p>Find the information about movies</p>
          </Link>
          <Link href="/Characters" className={cardClassName}>
            <h2 className={cardTitle}>Characters</h2>
            <p>Find the information about characters</p>
          </Link>
          <Link href="/Quotes" className={cardClassName}>
            <h2 className={cardTitle}>Quotes</h2>
            <p>Find the information about quotes</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Landing;
