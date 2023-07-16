export default function Starship({ starship }) {
    console.log(starship);
    return starship.map((starship) => {
      return (
        <p>
          starship: {starship.starship}
          <br />
          date: {starship.date}
        </p>
      );
    });
  }