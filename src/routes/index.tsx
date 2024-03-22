import { Navigate, Route, Routes as RRDRoutes } from "react-router-dom";
import * as Pg from "../pages";

export function Routes() {
  return (
    <RRDRoutes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Pg.Home />} />
      <Route path="/search" element={<Pg.Search />} />
      <Route path="/movie/:id" element={<Pg.Movie />} />
    </RRDRoutes>
  );
}
