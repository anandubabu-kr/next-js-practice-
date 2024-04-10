import React from "react";
import { locales } from "../../i18n";
import setLanguage from "next-translate/setLanguage";

const LanguageSwitcher = () => {
  return (
    <div>
      {locales.map((lng) => (
        <button
          onClick={async () => await setLanguage(lng)}
          className="p-1 px-4 mx-1 bg-white"
        >
          {lng}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
