import Form from "../../../../../components/composite/Form";
import Field from "../../../../../components/composite/Field";

import Input from "../../../../../components/primitive/Input";

interface LoginFormProps {
    username: string;
    onUsernameChange: (username: string) => void;
    password: string;
    onPasswordChange: (password: string) => void;
    error: string | null;
}

const LoginForm = ({
    username,
    onUsernameChange,
    password,
    onPasswordChange,
    error,
}: LoginFormProps) => {
    return (
        <Form
            columns={1}
        >
            {error && (
                <p role="alert" className="text-danger">
                    {error}
                </p>
            )}
            <Field
                label="Username"
                size="small"
            >
                <Input
                    type="text"
                    size="small"
                    value={username}
                    placeholder="Enter username..."
                    autoComplete="username"
                    onChange={(event) =>
                        onUsernameChange(event.target.value)
                    }
                />
            </Field>

            <Field
                label="Password"
                size="small"
            >
                <Input
                    type="password"
                    size="small"
                    value={password}
                    placeholder="Enter password..."
                    autoComplete="current-password"
                    onChange={(event) =>
                        onPasswordChange(event.target.value)
                    }
                />
            </Field>
        </Form>
    );
};

export default LoginForm;