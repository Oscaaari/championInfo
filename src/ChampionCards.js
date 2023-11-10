function ChampionCards(props) {
    return (
        <div className="championSlot">
            <div className="rotatingBorder"></div>
            <div className="championIconHolder">
                <img className="championIcon" src={props.championIcon} />
            </div>
        </div>
    );
}

export default ChampionCards;