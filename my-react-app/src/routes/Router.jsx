import { BrowserRouter, Route, Routes } from "react-router-dom"
import List from "../pages/List/List"

const Router = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<List/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router