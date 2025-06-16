import React from 'react';
import { Link, useLocation } from "react-router-dom";

function header(props) {
    const location = useLocation();

    return (
        <header>
            <div>
                <span>CampMate</span>
                <nav>
                <Link to="/reservation">
                    ReservationPage
                </Link>
                {" | "}
                <Link to="/campingzone">
                    CampingZonePage
                </Link>
                </nav>
            </div>
        </header>
    );
}

export default header;