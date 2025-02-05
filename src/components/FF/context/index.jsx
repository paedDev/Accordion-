import { createContext, useEffect, useState } from "react";
import featureFlagsData from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {

    const [isLoading, setIsLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({})

    async function fetchFeatureFlags() {
        try {
            setIsLoading(true)
            const res = await featureFlagsData();
            console.log(res);
            setEnabledFlags(res)
            setIsLoading(false)

        } catch (error) {
            console.log(error);
            setIsLoading(false)

            throw new Error(error)

        }
    }

    useEffect(() => {
        fetchFeatureFlags()
    }, [])
    return (
        <>
            <FeatureFlagsContext.Provider value={{ isLoading, enabledFlags }}>
                {children}
            </FeatureFlagsContext.Provider>
        </>
    )
}