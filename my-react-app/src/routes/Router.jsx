import { BrowserRouter, Route, Routes } from "react-router-dom"
import List from "../pages/List/List"
import Create from "../pages/Create/Create"
import Edit from "../pages/Edit/Edit"

const Router = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<List/>}></Route>
                    <Route path="/create" element={<Create/>}></Route>
                    <Route path="/edit/:id" element={<Edit/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router