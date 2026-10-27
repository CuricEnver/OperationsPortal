import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import NavMenu from "../shared/NavMenu/NavMenu";
import NavMenuPane from "../shared/NavMenu/NavMenuPane/NavMenuPane";
import NavItem from "../shared/NavItem/NavItem";

import Header from "../../../../../components/composite/Header";

import {
    inventoryLinks,
    bomLinks,
    planningLinks
} from "../../navigationLinks";

interface ApplicationsMenuProps {
    isOpen: boolean;
    onToggle: () => void;
}

const ApplicationsMenu = ({
    isOpen,
    onToggle,
}: ApplicationsMenuProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [activeGroup, setActiveGroup] = useState<string | null>(null);

    const handleNavigate = (path: string) => {
        navigate(path);
        onToggle();
    };

    const toggleInventory = () => {
        setActiveGroup((current) =>
            current === "inventory" ? null : "inventory"
        );
    };

    const toggleBom = () => {
        setActiveGroup((current) => 
            current === "bom" ? null : "bom"
        );
    };

    const togglePlanning = () => {
        setActiveGroup((current) => 
            current === "planning" ? null : "planning"
        );
    };

    return (
        <NavMenu
            label="Applications"
            isOpen={isOpen}
            onToggle={onToggle}
            align="right"
            isExpanded={activeGroup !== null}
        >
            <NavMenuPane>
                <Header
                    title="Applications"
                    size="medium"
                />

                <NavItem
                    title="Inventory"
                    isActive={location.pathname.startsWith("/inventory")}
                    onClick={toggleInventory}
                />

                <NavItem
                    title="Engineering"
                    isActive={location.pathname.startsWith("/bom/manager")}
                    onClick={toggleBom}
                />

                <NavItem
                    title="Planning"
                    isActive={location.pathname.startsWith("/planning")}
                    onClick={togglePlanning}
                />
            </NavMenuPane>

            {activeGroup === "inventory" && (
                <NavMenuPane variant="secondary">
                    <Header
                        title="Inventory"
                        size="medium"
                    />

                    {inventoryLinks.map((item) => (
                        <NavItem
                            key={item.path}
                            title={item.label}
                            description={item.description}
                            isActive={location.pathname === item.path}
                            onClick={() => handleNavigate(item.path)}
                        />
                    ))}
                </NavMenuPane>
            )}

            {activeGroup === "bom" && (
                <NavMenuPane variant="secondary">
                    <Header
                        title="BoM"
                        size="medium"
                    />

                    {bomLinks.map((item) => (
                        <NavItem
                            key={item.path}
                            title={item.label}
                            description={item.description}
                            isActive={location.pathname === item.path}
                            onClick={() => handleNavigate(item.path)}
                        />
                    ))}
                </NavMenuPane>
            )}

            {activeGroup === "planning" && (
                <NavMenuPane variant="secondary">
                    <Header
                        title="Planning"
                        size="medium"
                    />

                    {planningLinks.map((item) => (
                        <NavItem
                            key={item.path}
                            title={item.label}
                            description={item.description}
                            isActive={location.pathname === item.path}
                            onClick={() => handleNavigate(item.path)}
                        />
                    ))}
                </NavMenuPane>
            )}
        </NavMenu>
    );
};

export default ApplicationsMenu;