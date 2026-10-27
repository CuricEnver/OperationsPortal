import { useLocation, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

import useSites from "../../../../../context/Sites/useSites";

import Header from "../../../../../components/composite/Header";
import Footer from "../../../../../components/composite/Footer";
import NavItem from "../shared/NavItem/NavItem";

import Region from "../../../../../layouts/components/Region/Region";
import Section from "../../../../../layouts/components/Section/Section";

import {
    applicationLinks,
    managementLinks,
} from "../../navigationLinks";

interface NavDrawerProps {
    isOpen: boolean,
    onClose: () => void,
}

const NavDrawer = ({
    isOpen,
    onClose,
}: NavDrawerProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const {
        sites,
        subsites,
        currentSite,
        currentSubsite,
        selectSite,
        selectSubsite,
    } = useSites();

    const handleNavigate = (path: string) => {
        navigate(path);
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/20 lg:hidden"
                    onClick={onClose}
                />
            )}

            <aside
                className={`
                    fixed
                    inset-y-0
                    left-0
                    z-50
                    flex
                    w-1/4
                    min-w-70
                    flex-col
                    bg-surface
                    transition-transform
                    duration-300
                    lg:hidden
                    ${isOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }
                `}
            >
                <Header
                    title="Navigation"
                    size="large"
                    actions={
                        <button
                            type="button"
                            onClick={onClose}
                            className="
                                flex
                                items-center
                                justify-center
                                p-sm
                                text-primary
                                transition-colors
                                hover:bg-primary-light
                            "
                        >
                            <X className="size-5" />
                        </button>
                    }
                />

                <Region
                    scrollable
                    className="gap-sm"
                >
                    <Header
                        title="Locations"
                        size="medium"
                    />

                    <Section>
                        {sites.map((site) => {
                            const siteSubsites = subsites.filter(
                                (subsite) => subsite.siteId === site.id
                            );

                            return (
                                <div key={site.id}>
                                    <NavItem
                                        title={site.name}
                                        isActive={site.id === currentSite}
                                        onClick={() => selectSite(site.id)}
                                    />

                                    {siteSubsites.map((subsite) => (
                                        <NavItem
                                            key={subsite.id}
                                            title={`↳ ${subsite.name}`}
                                            size="small"
                                            isActive={subsite.id === currentSubsite}
                                            onClick={() => {
                                                selectSite(site.id);
                                                selectSubsite(subsite.id);
                                            }}
                                        />
                                    ))}
                                </div>
                            );
                        })}
                    </Section>

                    <Header
                        title="Applications"
                        size="medium"
                    />

                    <Section>
                        {applicationLinks.map((item) => (
                            <NavItem
                                key={item.path}
                                title={item.label}
                                isActive={
                                    location.pathname === item.path
                                }
                                onClick={() =>
                                    handleNavigate(item.path)
                                }
                            />
                        ))}
                    </Section>

                    <Header
                        title="Management"
                        size="medium"
                    />

                    <Section>
                        {managementLinks.map((item) => (
                            <NavItem
                                key={item.path}
                                title={item.label}
                                isActive={
                                    location.pathname === item.path
                                }
                                onClick={() =>
                                    handleNavigate(item.path)
                                }
                            />
                        ))}
                    </Section>
                </Region>

                <Footer>
                    <div className="p-sm text-small text-text-subtle">
                        Operations Portal v0.0.0
                    </div>
                </Footer>
            </aside>
        </>
    );
};

export default NavDrawer;