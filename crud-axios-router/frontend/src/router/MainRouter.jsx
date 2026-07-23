import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import CrudAxios from "../pages/CrudAxios";
import NoMatch from "../pages/NoMatch";
import TableCategory from "../pages/category/TableCategory";
import FormCategory from "../pages/category/FormCategory";

const MainRouter = () => {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="crudAxios" element={<CrudAxios />} />
            <Route path="category" element={<TableCategory />} />
            <Route path="category/create" element={<FormCategory />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
