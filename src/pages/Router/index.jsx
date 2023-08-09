import HomePages from "../Home";
import SuratPages from "../Surat";

const routes = [
  {
    path: "/",
    element: <HomePages />,
  },
  {
    path: "/surat/:id",
    element: <SuratPages />,
  },
];

export default routes;
