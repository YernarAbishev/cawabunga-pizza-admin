import { Routes, Route } from "react-router-dom";
import {routes} from "../utils/routes";

function AppRouter() {
    return (
        <main className="main">
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={<route.element />} />
                ))}
            </Routes>
        </main>
    );
}

export default AppRouter;