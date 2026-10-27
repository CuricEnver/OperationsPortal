import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import SitesProvider from "./context/Sites/SitesProvider";
import DateRangeProvider from "./context/DateRange/DateRangeProvider";

const App = () => {
    return (
        <BrowserRouter>
            <SitesProvider>
                <DateRangeProvider>
                    <AppRoutes />
                </DateRangeProvider>
            </SitesProvider>
        </BrowserRouter>
    );
};

export default App;