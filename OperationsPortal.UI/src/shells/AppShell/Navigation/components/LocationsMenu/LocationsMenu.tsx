import useSites from "../../../../../context/Sites/useSites";

import NavMenu from "../shared/NavMenu/NavMenu";
import NavMenuPane from "../shared/NavMenu/NavMenuPane/NavMenuPane";
import NavItem from "../shared/NavItem/NavItem";
import Header from "../../../../../components/composite/Header";

interface LocationsMenuProps {
    isOpen: boolean,
    onToggle: () => void,
}

const LocationsMenu = ({
    isOpen,
    onToggle,
}: LocationsMenuProps) => {
    const {
        sites,
        subsites,
        currentSite,
        currentSubsite,
        selectSite,
        selectSubsite,
    } = useSites();

    const activeSite = sites.find(
        (site) => site.id === currentSite
    );

    const activeSubsite = subsites.find(
        (subsite) => subsite.id === currentSubsite
    );

    const filteredSubsites = subsites.filter(
        (subsite) => subsite.siteId === currentSite
    );

    const displayLabel = activeSubsite
        ? `${activeSite?.name} > ${activeSubsite.name}`
        : activeSite?.name ?? "";

    return (
        <NavMenu
            label={displayLabel}
            isOpen={isOpen}
            onToggle={onToggle}
            align="left"
            isExpanded
        >
            <NavMenuPane>
                <Header
                    title="Sites"
                    size="medium"
                />

                {sites.map((site) => (
                    <NavItem
                        key={site.id}
                        title={site.name}
                        isActive={site.id === currentSite}
                        onClick={() => selectSite(site.id)}
                    />
                ))}
            </NavMenuPane>

            <NavMenuPane variant="secondary">
                <Header
                    title="Subsites"
                    size="medium"
                />

                {filteredSubsites.map((subsite) => (
                    <NavItem
                        key={subsite.id}
                        title={subsite.name}
                        isActive={subsite.id === currentSubsite}
                        onClick={() => selectSubsite(subsite.id)}
                    />
                ))}
            </NavMenuPane>
        </NavMenu>
    );
};

export default LocationsMenu;