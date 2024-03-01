import Link from "next/link"

const Header = () => {
  return (
    <div className="container text-center">
      <div className="flex items-center">
        <Link href="/" className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">Back to home</Link>
        <h1 className="font-bold text-xl mx-auto">Email signature tool</h1>
      </div>
    </div>
  )
}

export default Header;