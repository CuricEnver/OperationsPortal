import useForecastManagement
    from "../components/ForecastManagement/useForecastManagement";

const useBuildScheduler = () => {
    const {
        isOpen,
        openOverlay,
        closeOverlay,
    } = useForecastManagement();

    return {
        isOpen,
        openOverlay,
        closeOverlay,
    };
};

export default useBuildScheduler;