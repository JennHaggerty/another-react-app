import React, {lazy, Suspense} from "react";
  
//const Styles2004 = lazy(() => import("./variables_2004"));
const Styles2004Accessible = lazy(() => import("./variables_2004_accessible"));

export const ThemeSelector = ({ children }) => {
    return (
        <>
            <Suspense fallback={null}>
                <Styles2004Accessible />
            </Suspense>
            {children}
        </>
    );
};