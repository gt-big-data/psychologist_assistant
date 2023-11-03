export default function Navbar() {
    //const path = window.location.pathname;
    return (
        <nav className="nav">
            <a href="/" className="home">Home</a>
            <ul>
                <li>
                    <a href = "/pages/Form">Demographic Info</a>
                </li>
                <li>
                    <a href = "/pages/UserDesc">What wrong?</a>
                </li>
            </ul>
        </nav>
    )
}