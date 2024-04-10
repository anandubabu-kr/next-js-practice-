import React from "react";
import { locales } from "../../i18n";
import setLanguage from "next-translate/setLanguage";

const LanguageSwitcher = () => {
  return (
    <div>
      <select
        className="w-32 rounded-sm p-1 text-orange-600 focus:outline-none"
        onChange={async (lang) => await setLanguage(lang.target.value)}
        name="lang"
        id="lang"
      >
        {locales.map((lang) => (
          <option
            key={lang}
            value={lang}
            onClick={async () => await setLanguage(lang)}
            className="p-1 px-4 mx-1 bg-white"
          >
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
