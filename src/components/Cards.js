import React from 'react';
import CardItems from "./CardItems";
import './Cards.css'
function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these epic destinations !</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems
                            src="images/img-9.jpg"
                            text="Explore the hidden water fall deep inside the amazon jungle"
                            label='Adventure'
                            path='/services'
                        />
                        <CardItems
                            src="images/img-2.jpg"
                            text="Travel through the islands of Bali in a private Cruise"
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItems
                            src="images/img-9.jpg"
                            text="Explore the hidden water fall deep inside the amazon jungle"
                            label='Adventure'
                            path='/services'
                        />
                        <CardItems
                            src="images/img-2.jpg"
                            text="Travel through the islands of Bali in a private Cruise"
                            label='Luxury'
                            path='/services'
                        />
                         <CardItems
                            src="images/img-2.jpg"
                            text="Travel through the islands of Bali in a private Cruise"
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;