import { Outlet } from "react-router-dom";
import NavBar from "./Navigation/NavBar";

const AppShell = () => {
    return (
        <div className="flex h-screen flex-col overflow-hidden">
            <NavBar />

            <main className="flex min-h-0 flex-1 flex-col px-4 py-4">
                <div className="flex min-h-0 flex-1 flex-col border-x border-primary px-6">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AppShell;