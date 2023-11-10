import ChampionCards from "./ChampionCards.js";
import "./App.css";

function App() {
  const gwen = "https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.20.1/CHAMPION/887/ICON";
  const zoe = "https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.19.1/CHAMPION/142/ICON";
  const ekko = "https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.19.1/CHAMPION/245/ICON";

  return (
    <>
      <ChampionCards  championIcon={gwen} />
      <ChampionCards  championIcon={zoe} />
      <ChampionCards  championIcon={ekko} />
    </>
  );
}

export default App;
