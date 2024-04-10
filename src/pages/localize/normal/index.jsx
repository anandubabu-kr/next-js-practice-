import React from "react";
import useTranslation from "next-translate/useTranslation";

const Normal = () => {
  const { t } = useTranslation("test");
  return (
    <div>
      <h3 className=" text-2xl">{t("normal")}</h3>
      {t("description")}
    </div>
  );
};

export default Normal;
