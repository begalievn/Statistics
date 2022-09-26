import { FC, PropsWithChildren } from "react";
import { Navbar } from "../navbar";
import { IMainProps } from "./main.models";

export const Main: FC<PropsWithChildren<IMainProps>> = (props) => (
  <div>
    <div>
      <Navbar />
    </div>
    {props.children}
  </div>
);
