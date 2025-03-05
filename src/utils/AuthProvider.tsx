'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { authService } from "@/utils/authService";

// Описание типа пользователя (можно уточнить)
interface User {
    id: string;
    email: string;
}

// Определяем контекст с типами
interface AuthContextType {
    user: User | null;
    setUser: (user: User | null) => void;
}

// Создаем контекст с начальным значением `null`
const AuthContext = createContext<AuthContextType | null>(null);

// Определяем тип пропсов для `AuthProvider`
interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        authService
            .getUser()
            .then(setUser)
            .catch(() => setUser(null));
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

// Создаем хук `useAuth` с защитой от `null`
export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth должен использоваться внутри AuthProvider");
    }
    return context;
}
