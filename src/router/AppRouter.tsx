import { Route, Routes } from "react-router-dom";
import HeroList from "../components/HeroList";
import { publicRoutes } from "./index";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(route => (
                <Route element={<route.element />} path={route.path} key={route.path} />
            ))}
            <Route path='*' element={<HeroList />} />
        </Routes>
    )
}

export default AppRouter