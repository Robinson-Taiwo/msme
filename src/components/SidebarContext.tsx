"use client"
import { createContext, useState, ReactNode, useContext } from "react";

type SidebarContextType = {
    activePage: string;
    setActivePage: (page: string) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [activePage, setActivePage] = useState("dashboard");

    return (
        <SidebarContext.Provider value={{ activePage, setActivePage }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
};
