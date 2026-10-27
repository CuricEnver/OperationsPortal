import { createContext } from "react";

interface Site {
    id: number,
    name: string,
}

interface Subsite {
    id: number,
    siteId: number,
    name: string,
    timeZone: string
}

interface SitesContextValue {
    sites: Site[],
    subsites: Subsite[],

    currentSite: number | null,
    currentSubsite: number | null,

    selectSite: (siteId: number) => void,
    selectSubsite: (subsiteId: number) => void,
}

export const SitesContext = createContext<SitesContextValue | undefined>(
    undefined
);