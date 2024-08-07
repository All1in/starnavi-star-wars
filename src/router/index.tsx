import HeroList from "../components/HeroList";
import HeroCard from "../components/HeroCard";

export const publicRoutes = [
    { path: '/', element: HeroList },
    { path: '/hero/:id', element: HeroCard }
]