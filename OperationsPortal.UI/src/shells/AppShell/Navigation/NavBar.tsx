import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu as MenuIcon, X } from "lucide-react";

import ApplicationsMenu from "./components/ApplicationsMenu/ApplicationsMenu";
import ManagementMenu from "./components/ManagementMenu/ManagementMenu";
import LocationsMenu from "./components/LocationsMenu/LocationsMenu";
import NavDrawer from "./components/NavDrawer/NavDrawer";

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleMenu = (menuId: string) => {
        setOpenMenu((current) =>
            current === menuId
                ? null
                : menuId
        );
    };

    useEffect(() => {
        const desktopQuery = window.matchMedia("(min-width: 1024px)");

        const handleBreakpointChange = (
            event: MediaQueryListEvent
        ) => {
            if (event.matches) {
                setIsDrawerOpen(false);
            }
        };

        desktopQuery.addEventListener(
            "change",
            handleBreakpointChange
        );

        return () => {
            desktopQuery.removeEventListener(
                "change",
                handleBreakpointChange
            );
        };
    }, []);

    return (
        <>
            <nav className="flex h-15 shrink-0 items-center border-b border-border-primary bg-surface">
                <div className="flex w-full items-center justify-between px-lg select-none">
                    <Link
                        to="/"
                        className="px-3 text-4xl font-semibold text-primary"
                    >
                        Operations Portal
                    </Link>

                    <div className="hidden items-center gap-lg lg:flex">
                        <LocationsMenu
                            isOpen={openMenu === "locations"}
                            onToggle={() => toggleMenu("locations")}
                        />

                        <ApplicationsMenu
                            isOpen={openMenu === "applications"}
                            onToggle={() => toggleMenu("applications")}
                        />

                        <ManagementMenu
                            isOpen={openMenu === "management"}
                            onToggle={() => toggleMenu("management")}
                        />
                    </div>

                    <button
                        type="button"
                        className="
                            flex
                            items-center
                            justify-center
                            p-sm
                            text-primary
                            transition-colors
                            duration-200
                            hover:bg-primary-light
                            lg:hidden
                        "
                        onClick={() =>
                            setIsDrawerOpen((current) => !current)
                        }
                    >
                        <div
                            className={`
                                transition-transform
                                duration-200
                                ${isDrawerOpen ? "rotate-90" : "rotate-0"}
                            `}
                        >
                            {isDrawerOpen ? (
                                <X className="size-6" />
                            ) : (
                                <MenuIcon className="size-6" />
                            )}
                        </div>
                    </button>
                </div>
            </nav>

            <NavDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            />
        </>
    );
};

export default NavBar;