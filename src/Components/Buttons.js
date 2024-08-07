function Buttons({filteredItems}){
    return(
        <div className="btn">
            <button className="btn_item" onClick={() => filteredItems('deck')}>Deck</button>
            <button className="btn_item" onClick={() => filteredItems('navigation')}>Navigation</button>
            <button className="btn_item" onClick={() => filteredItems('rigging')}>Rigging</button>
            <button className="btn_item" onClick={() => filteredItems('safety')}>Safety</button>
            <button className="btn_item" onClick={() => filteredItems ('anchoring')}>Anchoring</button>
        </div>
    )
}

export default Buttons;