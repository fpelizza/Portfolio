import Link from "next/link";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container">
            <Link href="/" className="nav-link">
                Simple portfolio
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/Github" className="nav-link">
                            Github
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/Portfolio" className="nav-link">
                            Portfolio
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
