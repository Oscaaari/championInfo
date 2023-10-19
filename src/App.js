import ChampionCards from "./ChampionCards.js";

function App() {
    const championList = [
        {
            name: "Gwen",
            icon: "https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.20.1/CHAMPION/887/ICON",
        },
        {
            name: "Zoe",
            icon: "https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.19.1/CHAMPION/142/ICON",
        },
        {
            name: "Ekko",
            icon: "https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.19.1/CHAMPION/245/ICON",
        }
    ];
    const optionsJSX = championList.map((champion, index) => {
        return (
            <ChampionCards key={index} name={champion.name} icon={champion.icon} />
        );
    });

    return (
        <main>
            {optionsJSX}
        </main>
    );
    
}

export default App;

