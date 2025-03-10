import { FunctionComponent } from "react";
import { SideNavigation } from "./side-navigation";
import { TopNavigation } from "./top-navigation";

export const AdminLayout: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => (
  <>
    <SideNavigation />
    <TopNavigation />

    <div className="text-base bg-[#f4f6fa] text-black min-h-[100vh] pt-[60px] pl-[230px]">
      {children}
    </div>
  </>
);
