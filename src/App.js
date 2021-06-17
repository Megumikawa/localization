import React from 'react';
import { useTranslation } from "react-i18next";


const languages = [
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr'
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  },
  {
    code: 'ar',
    name: 'العربية',
    country_code: 'sa'
  },
]


function App() {
  const { t } = useTranslation()

  const releaseDate = new Date('2021-06-17')
  const timeDifference = new Date() - releaseDate
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  return (
    <div className="container">
      <div className="d-flex justify-content-end">
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {languages.map(({ code, name, country_code}) => (
          <li key={country_code}>
            <button className="dropdown-item">
            <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
              {name}
            </button>
          </li>
        ))}
        </ul>
      </div>
      </div>
      <div className="d-flex flex-column align-items-start">
        <h1 className="font-weight-normal mb-3">{t('welcome_message')}</h1>
        <p>{t('days_since_release', { number_of_days })}</p>
      </div>
    </div>
  );
}

export default App;
