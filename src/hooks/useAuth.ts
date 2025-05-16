export const useAuth = () => {
    const signIn = (id: string) => {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userId", id);
    }

    const signOut = () => {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("userId");
    }

    const isLoggedIn = () => localStorage.getItem("isAuthenticated") === "true";
    const getUserId = () => localStorage.getItem("userId");

    return {signIn, signOut, isLoggedIn, getUserId};
}

export type AuthContext = ReturnType<typeof useAuth>;