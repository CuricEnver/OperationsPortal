import { useState } from 'react';
import { login } from './loginApi';

const useLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSignIn = async () => {
        setIsSubmitting(true);
        setError(null);

        try {
            return await login({ username, password });
        } catch {
            setError('Unable to sign in. Please try again.');
            return null;
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        username,
        setUsername,
        password,
        setPassword,
        isSubmitting,
        error,
        handleSignIn,
    };
}

export default useLogin;