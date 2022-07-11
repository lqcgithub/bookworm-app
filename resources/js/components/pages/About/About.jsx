import React from 'react';

function About(props) {
    return (
        <>
            <div className="row py-3">
                <h1>About Us</h1>
                <hr/>
            </div>
            <div className="row py-3 justify-content-center">
                <div className="col-8">
                    <h1 className="text-center">Welcome to Bookworm</h1>
                    <span>
                    "Bookworm is an independent New York bookstore and language school with locations in Manhattan and Brooklyn.
                    We specialize in travel books and language classes."
                    </span>
                </div>

                <div className="col-8 row py-3 justify-content-center">
                    <div className="col-6">
                        <h1 >Our Story
                        </h1>
                        <span>
                            The name Bookworm was taken from the original name for New York International Airport,
                            which was renamed JFK in December 1963. Our Manhattan store has just moved to the West Village.
                            Our new location is 170 7th Avenue South,at the corner of Perry Street. From March 2008
                            through May 2016,the store was located in the Flatiron District.
                        </span>
                    </div>
                    <div className="col-6">
                        <h1 >Our Vision
                        </h1>
                        <span>
                            One of the last travel bookstores in the country, our Manhattan store carriesarange of
                            guidebooks(all 10%off)to suit the needs and tastes of every traveler and budget.
                            We believe thatanovel or travelogue can be just as valuableakey toaplace as any guidebook,
                            and our well-read,well-traveled staff is happy to make reading recommendations for any traveler,
                            book lover,or gift giver.
                        </span>
                    </div>
                </div>
            </div>
        </>

    );
}

export default About;
