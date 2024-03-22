import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex flex-wrap gap-3 justify-center py-4 bg-slate-800">
      <Link
        href="/signatures/wr"
        className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
      >
        Wellreceived
      </Link>
      <Link
        href="/signatures/sf"
        className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
      >
        Serviceforge CA
      </Link>
      <Link
        href="#"
        className="bg-gray-500 hover:bg-gray-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
      >
        Answerconnect US - WIP 🛠️
      </Link>
      <Link
        href="#"
        className="bg-gray-500 hover:bg-gray-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
      >
        Answerconnect UK - WIP 🛠️
      </Link>
      <Link
        href="#"
        className="bg-gray-500 hover:bg-gray-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
      >
        Answerforce US - WIP 🛠️
      </Link>
    </nav>
  );
};

export default Header;
