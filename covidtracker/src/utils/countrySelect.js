import Card from "../components/card";

export const countrySelected = (country) => {
  console.log(country);
  if (country.set === false) {
    return;
  } else {
    return (
      <div>
        <h2>{country.country}</h2>
        <Card
          confirm={country.confirm}
          recovered={country.recovered}
          death={country.deaths}
        />
      </div>
    );
  }
};
