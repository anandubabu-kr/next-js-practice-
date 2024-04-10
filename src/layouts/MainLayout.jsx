import React from "react";
import useTranslation from "next-translate/useTranslation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Sider from "@/components/Sider";

const MainLayout = ({ children }) => {
  const { lang } = useTranslation();

  return (
    <div>
      <div className=" bg-orange-500 flex justify-end py-1 px-4 text-white">
        <LanguageSwitcher />
      </div>
      <div className="flex">
        <Sider />

        <div style={{ padding: "24px" }}>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
