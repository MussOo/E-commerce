import Navbar from "./Navbar";


export default function MainLayout({children}) {
    
    return (
        <>
        <Navbar/>
        {children}
        </>
    )
}