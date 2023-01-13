import React from 'react'
import './SearchStyles.css'



function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2  > 'HEAVEN IS A MYTH HIMANCHAL IS REAL ' </h2>
                    <p>Come experience the very pinnacle of luxury Himalayas all-inclusive vacations for freaks. Our stay, set along the most gorgeous mountain settings and exquisite breath taking views near Grahan village, feature unlimited experience including complimentary green fees at our treaking If you are planning a good adventure spot you are at the right place.</p>
                    
                </div>
                <div className="right">
                 
                    <form>
                       
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input type="date" />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button>Rates & Availabilities </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search
