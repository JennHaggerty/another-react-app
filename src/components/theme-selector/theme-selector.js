import React, {lazy, Suspense} from "react";

const Styles2004 = lazy(() => import("./variables2004"));
//const AccessibleStyles2004 = lazy(() => import("./accessibleVariables2004"));

export const ThemeSelector = ({ children }) => {
    return (
        <>
            <Suspense fallback={null}>
                <Styles2004 />
            </Suspense>
            {children}
        </>
    );
};