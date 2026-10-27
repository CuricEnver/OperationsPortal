import { useLocation, useNavigate } from "react-router-dom";

import NavMenu from "../shared/NavMenu/NavMenu";
import NavMenuPane from "../shared/NavMenu/NavMenuPane/NavMenuPane";
import NavItem from "../shared/NavItem/NavItem";
import Header from "../../../../../components/composite/Header";

import { managementLinks } from "../../navigationLinks";

interface ManagementMenuProps {
    isOpen: boolean,
    onToggle: () => void,
}

const ManagementMenu = ({
    isOpen,
    onToggle,
}: ManagementMenuProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigate = (path: string) => {
        navigate(path);
        onToggle();
    };

    return (
        <NavMenu
            label="Management"
            isOpen={isOpen}
            onToggle={onToggle}
            align="right"
        >
            <NavMenuPane>
                <Header
                    title="Administrative Pages"
                    size="medium"
                />

                {managementLinks.map((item) => (
                    <NavItem
                        key={item.path}
                        title={item.label}
                        isActive={location.pathname === item.path}
                        onClick={() => handleNavigate(item.path)}
                    />
                ))}
            </NavMenuPane>
        </NavMenu>
    );
};

export default ManagementMenu;