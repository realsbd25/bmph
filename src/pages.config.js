import Landing from './pages/Landing';
import About from './pages/About';
import Layout from './Layout.jsx';


export const PAGES = {
    "Landing": Landing,
    "About": About,
}

export const pagesConfig = {
    mainPage: "Landing",
    Pages: PAGES,
    Layout: Layout,
};