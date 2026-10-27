import { useContext } from "react";

import { SitesContext } from "./SitesContext";

const useSites = () => {
    const context = useContext(SitesContext);

    if (context === undefined) {
        throw new Error(
            "useSites must be used within a SitesProvider"
        );
    }

    return context;
};

export default useSites;