import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Component from "../../";
import searchIcon from "../../../assets/search.svg";

export default function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };
  return (
    <header className="overflow-hidden sticky top-0 w-[100vw] bg-black h-16 flex items-center justify-evenly gap-8 max-md:flex-wrap max-md:justify-center max-md:items-center max-md:flex-col  max-md:h-fit  max-md:p-0">
      <Link to="/" className="flex justify-center items-center gap-4">
        <div className="bg-white rounded-full w-fit h-fit">
          <img src="logo.png" className="w-10 h-10" />
        </div>
        <h1 className="text-white">
          Have a <span className="font-bold text-red-600">BREAK</span>
          <br /> and watch a{" "}
          <span className="font-bold text-blue-600">MOVIE</span>
        </h1>
      </Link>
      <div className="text-white flex justify-center items-center gap-4">
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center gap-4"
      >
        <Link to={"/trending"}>Tendências</Link>
        <Component.FieldText.BaseInput>
          <Component.FieldText.Input
            label="search"
            placeholder="O que está procurando?"
            onChange={handleChange}
          />
        </Component.FieldText.BaseInput>
        <Component.Button type="submit" className="bg-slate-500 h-fit">
          <img src={searchIcon} alt="Search Icon" className="w-4 h-4" />
        </Component.Button>
      </form>
    </header>
  );
}
