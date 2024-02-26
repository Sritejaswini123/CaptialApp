import  { useState } from 'react';


const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
];

const Capitals = () => {
  const [activeCapitalId, setActiveCapitalId] = useState(countryAndCapitalsList[0].id);

  const onChangeCapital = (event) => {
    setActiveCapitalId(event.target.value);
  };

  const getCountry = () => {
    const activeCountryAndCapital = countryAndCapitalsList.find(
      (eachCapital) => eachCapital.id === activeCapitalId
    );
    return activeCountryAndCapital.country;
  };

  const country = getCountry();

  return (
    <div className="app-container">
      <div className="capitals-container">
        <h1 className="heading">Countries And Capitals</h1>
        <div className="question-container">
          <select
            className="capital-select"
            onChange={onChangeCapital}
            value={activeCapitalId}
          >
            {countryAndCapitalsList.map((eachCapital) => (
              <option key={eachCapital.id} value={eachCapital.id} className="option">
                {eachCapital.capitalDisplayText}
              </option>
            ))}
          </select>
          <p className="question">is capital of which country?</p>
        </div>
        <p className="country">{country}</p>
      </div>
    </div>
  );
};

export default Capitals;
