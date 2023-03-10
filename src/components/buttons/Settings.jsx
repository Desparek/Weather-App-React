import { SettingsIcon } from "../../assets/icons/index";
import settingsAnimation from "../../utils/data/scripts/settingsAnimation";
import SettingsPopup from "../SettingsPopup";

const Settings = ({
  language,
  setLanguage,
  theme,
  setTheme,
  open,
  setOpen,
}) => {
  return (
    <>
      <button onClick={() => settingsAnimation(open, setOpen)}>
        <span className="sr-only">Settings menu button</span>
        <SettingsIcon className="settings absolute top-5 right-4 text-dark dark:text-light sm:right-8" />
      </button>
      <SettingsPopup
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
      />
    </>
  );
};

export default Settings;
