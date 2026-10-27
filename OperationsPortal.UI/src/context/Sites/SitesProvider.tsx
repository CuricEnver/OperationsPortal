import { useState } from "react";
import type { ReactNode } from "react";

import { SitesContext } from "./SitesContext";

interface SitesProviderProps {
    children: ReactNode,
}

const sites = [
    {
        id: 1,
        name: "Kokomo",
    },
    {
        id: 2,
        name: "Luxembourg",
    },
];

const subsites = [
    {
        id: 1,
        siteId: 1,
        name: "Manufacturing Facility",
        timeZone: "America/Indiana/Indianapolis",
    },
    {
        id: 2,
        siteId: 1,
        name: "Prototype Engineering Lab",
        timeZone: "America/Indiana/Indianapolis",
    },
    {
        id: 3,
        siteId: 2,
        name: "Manufacturing Facility",
        timeZone: "Europe/Luxembourg",
    },
];

const SitesProvider = ({
    children,
}: SitesProviderProps) => {
    const [currentSite, setCurrentSite] = useState<number | null>(1);
    const [currentSubsite, setCurrentSubsite] = useState<number | null>(1);

    const [lastSubsiteBySite, setLastSubsiteBySite] = useState<
        Record<number, number>
    >({
        1: 1,
    });

    const selectSite = (siteId: number) => {
        setCurrentSite(siteId);

        const rememberedSubsiteId = lastSubsiteBySite[siteId];

        const rememberedSubsite = subsites.find(
            (subsite) =>
                subsite.id === rememberedSubsiteId &&
                subsite.siteId === siteId
        );

        if (rememberedSubsite) {
            setCurrentSubsite(rememberedSubsite.id);
            return;
        }

        const firstSubsite = subsites.find(
            (subsite) => subsite.siteId === siteId
        );

        setCurrentSubsite(firstSubsite?.id ?? null);
    };

    const selectSubsite = (subsiteId: number) => {
        setCurrentSubsite(subsiteId);

        if (currentSite !== null) {
            setLastSubsiteBySite((current) => ({
                ...current,
                [currentSite]: subsiteId,
            }));
        }
    };

    return (
        <SitesContext.Provider
            value={{
                sites,
                subsites,
                currentSite,
                currentSubsite,
                selectSite,
                selectSubsite,
            }}
        >
            {children}
        </SitesContext.Provider>
    );
};

export default SitesProvider;