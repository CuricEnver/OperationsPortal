import { useState, useCallback } from "react";

const useForecastManagement = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openOverlay = useCallback(() => {
        setIsOpen(true);
    }, []);

    const closeOverlay = useCallback(() => {
        setIsOpen(false);
    }, []);

    return {
        isOpen,
        openOverlay,
        closeOverlay
    };
};

export default useForecastManagement;