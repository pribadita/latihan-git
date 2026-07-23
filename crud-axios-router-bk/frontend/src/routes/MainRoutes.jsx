import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import CrudAxios from "../pages/CrudAxios";
import TableCategory from "../pages/category/TableCategory";
import FormCategory from "../pages/category/FormCategory";

function MainRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="crud-axios" element={<CrudAxios />} />
            <Route path="category" element={<TableCategory />} />
            <Route path="category/create" element={<FormCategory />} />
            <Route path="category/:id/edit" element={<FormCategory />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default MainRoutes;
