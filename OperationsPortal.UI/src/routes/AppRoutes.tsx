import { Routes, Route } from "react-router-dom";

import AppShell from "../shells/AppShell/AppShell";

import OperationsSummary from "../features/analytics/OperationsSummary/OperationsSummary";
import Login from "../features/administration/Login/Login";
import MasterData from "../features/administration/MasterData/MasterData";
import InventoryLocations from "../features/inventory/InventoryLocations/InventoryLocations";
import InventoryCatalog from "../features/inventory/InventoryCatalog/InventoryCatalog";
import InventoryOnHand from "../features/inventory/InventoryOnHand/InventoryOnHand";
import InventoryTransactions from "../features/inventory/InventoryTransactions/InventoryTransactions";
import BOMManager from "../features/engineering/BOMManager/BOMManager";
import ShipScheduler from "../features/planning/ShipScheduler/ShipScheduler";
import BuildScheduler from "../features/planning/BuildScheduler/BuildScheduler";
import MaterialReview from "../features/planning/MaterialReview/MaterialReview";
import WorkOrder from "../features/planning/WorkOrders/WorkOrder";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<AppShell />}>
                <Route
                    path="/"
                    element={<OperationsSummary />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/master-data"
                    element={<MasterData />}
                />

                <Route
                    path="/inventory/locations"
                    element={<InventoryLocations />}
                />

                <Route
                    path="/inventory/catalog"
                    element={<InventoryCatalog />}
                />
                
                <Route
                    path="/inventory"
                    element={<InventoryOnHand />}
                />

                <Route
                    path="/inventory/transactions"
                    element={<InventoryTransactions />}
                />

                <Route
                    path="/bom/manager"
                    element={<BOMManager />}
                />

                <Route
                    path="/bom/analysis"
                    element={<InventoryTransactions />}
                />

                <Route
                    path="/planning/ship-scheduler"
                    element={<ShipScheduler />}
                />

                <Route
                    path="/planning/build-scheduler"
                    element={<BuildScheduler />}
                />

                <Route
                    path="/planning/material-review"
                    element={<MaterialReview />}
                />

                <Route
                    path="/planning/work-orders"
                    element={<WorkOrder />}
                />

            </Route>
        </Routes>
    );
};

export default AppRouter;