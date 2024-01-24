import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={() => {
                        console.log("Button Clicked")
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                <RestaurantCard
                    resName="Uncle Foo"
                    cuisine="Biryani, North Indian, Asian"
                    rating="4.5"
                />
                <RestaurantCard
                    resName="KFC"
                    cuisine="Burger, Fries"
                    rating="3.5"
                />
            </div>
        </div>
    )
}

export default Body;