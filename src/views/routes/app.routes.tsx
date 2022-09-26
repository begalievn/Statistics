import { Outlet, RouteObject } from "react-router-dom";
import { BrowserRoute } from "../../routes/browser.routes";
import { ByPriorityAreas } from "../content/by-priority-areas";
import { ByRregion } from "../content/by-region";
import { NotFound } from "../content/not-found";
import { PlaceOfWork } from "../content/place-work";
import { StartPage } from "../content/start-page";
import { TotalStats } from "../content/total-stats";

export const appRoutesDefinition: RouteObject[] = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/",
        element: <StartPage />,
      },
      {
        path: BrowserRoute.totalStats,
        element: <TotalStats />,
      },
      {
        path: BrowserRoute.byRegion,
        element: <ByRregion />,
      },
      {
        path: BrowserRoute.byPriorityAreas,
        element: <ByPriorityAreas />,
      },
      {
        path: BrowserRoute.placeOfWork,
        element: <PlaceOfWork />,
      },
    ],
  },
];
