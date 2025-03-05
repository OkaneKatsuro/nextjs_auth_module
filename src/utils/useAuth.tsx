import { useState, useEffect } from "react";
import {authService} from "@/utils/authService";


export function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        authService
            .getUser()
            .then(setUser)
            .catch(() => setUser(null))
            .finally(() => setLoading(false));
    }, []);

    return { user, loading, login: authService.login, logout: authService.logout };
}
