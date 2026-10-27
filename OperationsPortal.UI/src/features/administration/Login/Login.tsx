import { LogIn } from "lucide-react";

import OverlayShell from "../../../shells/OverlayShell/OverlayShell";
import Region from "../../../layouts/components/Region/Region";

import Header from "../../../components/composite/Header";
import Footer from "../../../components/composite/Footer";
import Button from "../../../components/primitive/Button";

import LoginForm from "./components/LoginForm/LoginForm";

const Login = () => {
    return (
        <OverlayShell
            size="small"
        >
            <Header
                title="Sign In"
                subtitle="Enter your credentials to access Operations Portal"
                icon={LogIn}
            />
            <Region className="gap-lg" scrollable>
                <LoginForm />
            </Region>
            <Footer>
                <Button>
                    Sign In
                </Button>
            </Footer>
        </OverlayShell>
    );
};

export default Login;