import { useState } from "react";

import Form from "../../../../../components/composite/Form";
import Field from "../../../../../components/composite/Field";

import Input from "../../../../../components/primitive/Input";

import testImage from "../../../../../assets/test.png"

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Form
            columns={1}
        >
            <Field
                label="Username"
                size="small"
            >
                <Input
                    type="text"
                    size="small"
                    value={username}
                    placeholder="Enter username..."
                    onChange={(event) =>
                        setUsername(event.target.value)
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
                    onChange={(event) =>
                        setPassword(event.target.value)
                    }
                />
            </Field>
            <img 
                src={testImage}
                draggable={false}
                className="
                        mx-auto
                        w-8/10
                        select-none"
                alt="Demand through execution workflow"
            />
        </Form>
    );
};

export default LoginForm;