import { Factory, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

import OverlayShell from "../../../shells/OverlayShell/OverlayShell";
import Region from "../../../layouts/components/Region/Region";
import Section from "../../../layouts/components/Section/Section";

import Header from "../../../components/composite/Header";
import Footer from "../../../components/composite/Footer";
import Button from "../../../components/primitive/Button";

import LoginForm from "./components/LoginForm/LoginForm";

import useLogin from "./useLogin";

const Login = () => {
    const navigate = useNavigate();

    const {
        username,
        setUsername,
        password,
        setPassword,
        isSubmitting,
        error,
        handleSignIn,
    } = useLogin();

    const handleSignInAndNavigate = async () => {
        const response = await handleSignIn();

        if (response) {
            navigate("/");
        }
    };

    return (
        <OverlayShell
            size="small"
        >
            <Header
                title="Operations Portal"
                subtitle="Manufacturing Operations"
                icon={Factory}
                size="large"
            />
            <Region scrollable>
                <Header
                    title="Sign In"
                    subtitle="Enter your credentials to continue"
                    icon={LogIn}
                    size="medium"
                />
                <Section>
                    <LoginForm
                        username={username}
                        onUsernameChange={setUsername}
                        password={password}
                        onPasswordChange={setPassword}
                        error={error}
                    />
                </Section>
            </Region>
            <Footer>
                <Button
                    onClick={handleSignInAndNavigate}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Signing In..." : "Sign In"}
                </Button>
            </Footer>
        </OverlayShell>
    );
};

export default Login;