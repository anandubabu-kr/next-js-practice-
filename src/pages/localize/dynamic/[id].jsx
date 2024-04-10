import React from "react";
import useTranslation from "next-translate/useTranslation";

const DynamicPage = () => {
  const { t, lang } = useTranslation("test");
  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>
        {t("lang")} is in "{lang}"
      </p>
    </div>
  );
};

export default DynamicPage;
