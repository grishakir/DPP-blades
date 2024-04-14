import { Instance } from "mobx-state-tree";
import { createContext, useContext } from "react";
import rootStore from "./RootStore";

const RootStoreContext = createContext<null | Instance<typeof rootStore>>(null);

export const StoreProvider = RootStoreContext.Provider;

export const useStore = (): typeof rootStore => {
    const store = useContext(RootStoreContext);

    if (!store) {
        throw new Error("useStore must be used within a StoreProvider");
    }

    return store;
};