import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/wr"
              className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
            >
              Wellreceived
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
          </div>
        </div>
      </section>
    </main>
  );
}
