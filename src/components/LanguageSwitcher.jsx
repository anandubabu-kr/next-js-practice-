import React from "react";
import { locales } from "../../i18n";
import setLanguage from "next-translate/setLanguage";

const LanguageSwitcher = () => {
  return (
    <div>
      <select
        className="w-32 rounded-sm p-1 text-orange-600 focus:outline-none"
        onChange={async (lng) => await setLanguage(lng.target.value)}
        name="lang"
        id="lang"
      >
        {locales.map((lng) => (
          <option
            value={lng}
            onClick={async () => await setLanguage(lng)}
            className="p-1 px-4 mx-1 bg-white"
          >
            {lng}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
