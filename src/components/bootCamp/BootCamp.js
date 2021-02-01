import React from "react";
import { bootCampRoutes } from "../../routes/bootcampsRoutes";
import SecondNav from "../secondNav/SecondNav";

const BootCamp = () => {
    return <SecondNav routes={bootCampRoutes} />;
};

export default BootCamp;
