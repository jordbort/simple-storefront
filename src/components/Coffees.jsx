export default function Coffees() {
    const coffees = [
        {
            img: `https://www.lacolombe.com/cdn/shop/products/PerfectPair_Pack_web1_800x500.jpg`,
            name: `Perfect Pair Pack`,
            roast: `Dark Roast`,
            description: `Bleu, Corsica`,
            price: `$28.00`,
            rating: 4,
            promo: ``,
            reviews: 223
        },
        {
            img: `https://www.lacolombe.com/cdn/shop/files/ColdBrewBlend_web1_3_800x500.jpg`,
            name: `Cold Brew Blend`,
            roast: `Medium Roast`,
            description: `Bold, Smooth, Refreshing`,
            price: `$14.00`,
            rating: 5,
            promo: `New`,
            reviews: 2
        },
        {
            img: `https://www.lacolombe.com/cdn/shop/files/Tanzania_Natural_Wonder_DTC_web1_800x500.jpg`,
            name: `Tanzania Natural Wonder`,
            roast: `Medium Roast`,
            description: `Raspberry, Lemon Zest, Dulce de Leche`,
            price: `$17.00`,
            rating: 0,
            promo: `New`,
            reviews: 0
        },
        {
            img: `https://www.lacolombe.com/cdn/shop/files/AroundTheWorld_GB_TanzaniaUpdate_Web_1_1_800x500.jpg`,
            name: `Around the World Gift Box`,
            roast: `Medium-Light Roast`,
            description: `Tanzania Natural Wonder, Brazil Beleza, Colombia San Roque`,
            price: `$49.00`,
            rating: 4,
            promo: `Limited Edition`,
            reviews: 21
        },
        {
            img: `https://www.lacolombe.com/cdn/shop/files/ScreenShot2023-06-05at11.24.24AM_800x500.png`,
            name: `Congo Togetherness`,
            roast: `Light Roast`,
            description: `Plum, Lavender Honey, Allspice`,
            price: `$17.00`,
            rating: 4,
            promo: `Limited Edition`,
            reviews: 15
        },
        {
            img: `https://www.lacolombe.com/cdn/shop/products/Corsica_12oz_Coffee_Web1_800x500.jpg`,
            name: `Corsica`,
            roast: `Dark Roast`,
            description: `Baker's Chocolate, Red Wine, Spices`,
            price: `$14.00`,
            rating: 5,
            promo: `Top Rated`,
            reviews: 880
        },
        {
            img: `https://www.lacolombe.com/cdn/shop/products/Nizza_12ozCoffee_web1_800x500.jpg`,
            name: `Nizza`,
            roast: `Medium Roast`,
            description: `Milk Chocolate, Nuts, Brownie`,
            price: `$14.00`,
            rating: 5,
            promo: `Top Rated`,
            reviews: 772
        },
        {
            img: `https://www.lacolombe.com/cdn/shop/files/SummerFavorites3Pack_2023_web_800x500.jpg`,
            name: `Summer Favorites Pack`,
            roast: `Dark-Medium Roast`,
            description: `Waymaker, Sun Chaser, La Colombe x The New Yorker`,
            price: `$46.00`,
            rating: 0,
            promo: `Seasonal`,
            reviews: 0
        },
        {
            img: `https://www.lacolombe.com/cdn/shop/files/ScreenShot2023-05-23at11.04.24PM_800x500.png`,
            name: `Waymaker`,
            roast: `Dark Roast`,
            description: `Chocolate Mousse, Toasted Pecan, Orange Bitters`,
            price: `$16.00`,
            rating: 4,
            promo: `Seasonal`,
            reviews: 7
        },
        {
            img: `https://www.lacolombe.com/cdn/shop/files/SunChaser_DTC_Web_1_800x500.jpg`,
            name: `Sun Chaser`,
            roast: `Medium Roast`,
            description: `Lemonade, Cherry Cola, Caramel`,
            price: `$16.00`,
            rating: 0,
            promo: `New`,
            reviews: 0
        }
    ]

    function renderStars(num) {
        const starsArr = Array(num).fill(`⭐`)
        return starsArr
    }

    function getPromoColor(promo) {
        if (promo === `Limited Edition`) { return `#7e004d` }
        else if (promo === `Top Rated`) { return `#a42929` }
        else if (promo === `New`) { return `#996f0a` }
        else if (promo === `Seasonal`) { return `#3170c5` }
        else { return `#000000` }
    }

    return (
        <div className="items-container">
            {coffees.map((coffee, idx) => {
                return (
                    <div className="item-card" key={idx}>
                        <div className="item-image">
                            {coffee.promo ? <h5 className="item-promo" style={{ backgroundColor: getPromoColor(coffee.promo) }}>{coffee.promo.toUpperCase()}</h5> : null}
                            <img src={coffee.img} className="item-image" alt={coffee.name} title={coffee.name} />
                        </div>
                        {coffee.name ? <h3 className="item-name">{coffee.name.toUpperCase()}</h3> : null}
                        {coffee.roast ? <h5 className="item-roast">{coffee.roast.toUpperCase()}</h5> : null}
                        {coffee.description ? <p className="item-description">{coffee.description}</p> : null}
                        {coffee.price ? <p className="item-price">{coffee.price}</p> : null}
                        {coffee.rating || coffee.reviews ?
                            <p className="ratings">
                                {coffee.rating > 0 ? <span className="item-rating">{renderStars(coffee.rating)}</span> : null}
                                {coffee.reviews > 0 ? <span className="item-reviews">{coffee.reviews} {coffee.reviews === 1 ? `Review` : `Reviews`}</span> : null}
                            </p> : null
                        }
                    </div>
                )
            })}
        </div>
    )
}