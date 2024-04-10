import React from "react";
import useTranslation from "next-translate/useTranslation";

const DynamicPage = () => {
  const { t } = useTranslation("test");
  return (
    <div>
      <h1 className=" text-2xl">{t("dynamic")}</h1>
      <p>{t("description")}</p>
    </div>
  );
};

export default DynamicPage;
