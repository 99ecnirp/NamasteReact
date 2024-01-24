const styleCard ={
    backgroundColor: "grey"
}

const RestaurantCard = (props) => {
    const {rating, cuisine} = props
    return (
        // <div className="res-card" style={{
        //     backgroundColor: "blue"
        // }}></div>
        <div className="res-card" style={styleCard}>
            <img
                className="res-logo"
                alt="Food img" 
                src="https://flo.health/uploads/media/sulu-1200x630/09/1599-Fast%20food.jpg?v=1-0&inline=1">
            </img>
            <h3>{props.resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

export default RestaurantCard;