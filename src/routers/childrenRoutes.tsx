import navigations from "../navigations";
import { FaqPage, JunologixPage } from "../pages";

export const childrenRoutes = [
  {
    path: navigations.LANDING_PAGE,
    element: <JunologixPage />,
  },
  {
    path: navigations.FAQ,
    element: <FaqPage />,
  },
];
