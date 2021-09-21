import { About } from "./pages/about/about";
import AllPart from "./pages/allPart";
import Greet from "./pages/greet/greet";
import Home from "./pages/home/home";

const routes = [
    {
        path: "/",
        /* Use exact for go to exact path */
        exact: true,
        component: Home,
    },
    {
        exact: true,
        component: About,
        path: "/about",
    },
    {
        exact: true,
        component: Greet,
        /* / here /greet:anything to render greet component if i use /greet/ in with exact then i can able to to get the text of after second / text with hook */
        path: "/greet/:anything", // to get data from path
    },
    {
        component: AllPart,
        path: "/parts",
    },
];

export default routes;
