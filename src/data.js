import { About } from "./components/About";
import { Contacts } from "./components/Contacts";
import { Home } from "./components/Home";


export const data = [
    {
        route:'/',
        exact:true,
        name:"Main",
        element:()=> <Home/>
    },
    {
        route:'/about',
        exact:true,
        name:"About us",
        element:()=> <About/>
    },
    {
        route:'/contacts',
        exact:true,
        name:"Contact",
        element:()=> <Contacts/>
    },
]