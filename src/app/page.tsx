import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <div className="container">
        <Link href="/wr" className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">Wellreceived</Link>
        </div>
      </section>
    </main>
  );
}
