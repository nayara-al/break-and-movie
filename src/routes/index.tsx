import { Route, Routes as RRDRoutes } from "react-router-dom";
import * as Pg from "../pages";

export function Routes() {
  return (
    <RRDRoutes>
      <Route path="/home" element={<Pg.Home />} />
    </RRDRoutes>
  );
}
