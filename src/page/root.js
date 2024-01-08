import { Outlet, Link, useNavigate } from "react-router-dom";

const RootComponent = () => {
    // for routing programatically
    const navigate = useNavigate();

    return (
        <>
            <pre>
                <h2>Topics Covered: </h2>
                <ul>
                    <li>createBrowserRouter</li>
                    <li>Router Provider</li>
                    <li>Outlet</li>
                    <li>Link</li>
                    <li>useNavigate Hook</li>
                </ul>
            </pre>
            <h1>Root Component</h1>
            <ul>
                <li>
                    {/* <a href="/">Home</a> */}
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    {/* <a href="/contact">Contact</a> */}
                    <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                    {/* <a href="/about">About</a> */}
                    <Link to={"/about"}>About</Link>
                </li>
            </ul>
            <Outlet/>
            <br/>
            <br/>
            <br/>
            <br/>
            <button onClick={() => navigate("/about")}>
                GOTO ABOUT PAGE
            </button>
        </>
    )
}

export default RootComponent;