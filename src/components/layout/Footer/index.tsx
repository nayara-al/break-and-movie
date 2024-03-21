export default function Footer() {
  return (
    <footer className="sticky bottom-0 w-full h-8 bg-white flex justify-center items-center">
      <p className="text-black">
        Aplicação desenvolvida por{" "}
        <a href="https://www.linkedin.com/in/nayara-lira/" target="_blank" className="text-blue-950 font-bold">
          Nayara Lira
        </a>
        com a API <a href="https://developer.themoviedb.org/docs/getting-started" target="_blank" className="font-bold text-blue-950">TMBD</a>
      </p>
    </footer>
  );
}
