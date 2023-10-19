function ChampionCards(props) {
        return (
            <article key={props.index}>
                <p>{props.name}</p>
                <img src={props.icon}></img>
            </article>
        );
}

export default ChampionCards;