import React from 'react'
import FlightBookingSection from "@/Components/Client/Home/FlightBookingSection.jsx";
import Banner from "@/Components/Client/Home/Banner.jsx";
import HolidayPackages from "@/Components/Client/Home/HolidayPackages.jsx";
import PopularHotelPackage from "@/Components/Client/Home/PopularHotelPackage.jsx";
import PopularUmrahPackage from "@/Components/Client/Home/PopularUmrahPackage.jsx";
import PopularDestination from "@/Components/Client/Home/PopularDestination.jsx";
import PopularTour from "@/Components/Client/Home/PopularTour.jsx";
import StatsSection from "@/Components/Client/Home/StatsSection.jsx";
import Main from "@/Layouts/Client/Main.jsx";
import FAQSection from "@/Components/Client/Home/FAQSection.jsx";
import BecomeAPartnerSection from "@/Components/Client/Home/BecomeAPartnerSection.jsx";
import AppSection from "@/Components/Client/Home/AppSection.jsx";
import TopFlightDeals from "@/Components/Client/Home/TopFlightDeal.jsx";
import {SERVICE_TYPE_HOTEL, SERVICE_TYPE_TOUR} from "@/helpers/const.js";

const Page = ({data}) => {
    const {destinations, tours, search} = data
    return (
        <Main>

        </Main>
    )
}

export default Page
