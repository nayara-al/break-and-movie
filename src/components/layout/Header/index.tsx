
export default function Header() {
  return (
    <header className="sticky top-0 w-full bg-black h-12 flex items-center justify-center gap-8">
        <div className="bg-white rounded-full w-fit h-fit">
            <img src="logo.png" className="w-10 h-10"/>
        </div>
        <h1 className="text-white">Have a <span className="font-bold text-red-600">BREAK</span> and watch a <span className="font-bold text-blue-600">MOVIE</span></h1>
    </header>
  )
}
