import React from "react";
import useTranslation from "next-translate/useTranslation";

const Normal = () => {
  const { t, lang } = useTranslation("test");
  return (
    <div>
      <h1>Normal</h1>
      {t("lang")} is in "{lang}"
    </div>
  );
};

export default Normal;
