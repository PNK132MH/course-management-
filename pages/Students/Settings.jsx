import { useState } from "react";
import "./Settings.css";

function Settings() {

  const savedSettings = JSON.parse(
    localStorage.getItem("settings") || "{}"
  );

  const [emailNotifications, setEmailNotifications] = useState(
    savedSettings.emailNotifications ?? true
  );

  const [language, setLanguage] = useState(
    savedSettings.language || "English (US)"
  );

  const [saved, setSaved] = useState(false);


  function handleSave(event) {

    event.preventDefault();

    const settings = {
      emailNotifications,
      language,
      appearance
    };

    localStorage.setItem(
      "settings",
      JSON.stringify(settings)
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  }


  return (
    <main className="settings-page">

      <div className="settings-container">

        <div className="settings-heading">

          <h1>Settings</h1>

          <p>
            Manage your LearnHub preferences.
          </p>

        </div>


        <form
          className="settings-card"
          onSubmit={handleSave}
        >

          {/* EMAIL NOTIFICATIONS */}

          <div className="setting-row">

            <div>
              <h3>Notifications</h3>

              <p>
                Receive updates about your courses.
              </p>
            </div>

            <label className="switch">

              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={(event) =>
                  setEmailNotifications(event.target.checked)
                }
              />

              <span className="slider"></span>

            </label>

          </div>


          {/* LANGUAGE */}

          <div className="setting-row">

            <div>
              <h3>Language</h3>

              <p>
                Choose your preferred language.
              </p>
            </div>

            <select
              value={language}
              onChange={(event) =>
                setLanguage(event.target.value)
              }
            >
              <option>English (US)</option>
              <option>English (UK)</option>
            </select>

          </div>


          <button
            type="submit"
            className="settings-save"
          >
            Save Settings
          </button>


          {saved && (
            <p className="settings-saved">
              Settings saved successfully!
            </p>
          )}

        </form>

      </div>

    </main>
  );
}

export default Settings;