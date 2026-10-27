import { useContext } from "react";

import DateRangeContext from "./DateRangeContext";

const useDateRange = () => {
    const context = useContext(DateRangeContext);

    if (!context) {
        throw new Error(
            "useDateRange must be used within a DateRangeProvider"
        );
    }

    return context;
};

export default useDateRange;
