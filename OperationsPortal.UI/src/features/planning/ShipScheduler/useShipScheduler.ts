import useForecastManagement from "../components/ForecastManagement/useForecastManagement";

const useShipScheduler = () => {
    const { isOpen, openOverlay, closeOverlay } = useForecastManagement();

    return {    
        isOpen,
        openOverlay,
        closeOverlay
    };
};

export default useShipScheduler;