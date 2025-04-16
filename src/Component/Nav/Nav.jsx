import { NavLink } from "react-router-dom";
import './Nav.css'
const Nav = () => {
    return (
        <div className=" container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <li> <NavLink
                                to={`/`}
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }
                            >
                                Home
                            </NavLink></li>

                            <li> <NavLink
                                to={`/bookList`}
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }
                            >
                                Listed Books
                            </NavLink></li>


                            <li> <NavLink
                                to={`/pageReadCharts`}
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }
                            >
                                Pages to Read
                            </NavLink></li>


                            <li> <NavLink
                                to={`/booksOfJournals`}
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }
                            >
                                Books and Journals
                            </NavLink></li>



                            <li> <NavLink
                                to={`/aboutus`}
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }
                            >
                                About Us
                            </NavLink></li>
                            <li className="mb-3">    <NavLink
                                to={`/signIn`}
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }
                            >
                                <span>  Sign In</span>
                            </NavLink>

                                <NavLink
                                    to={`/signUp`}
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "active"
                                            : isPending
                                                ? "pending"
                                                : ""
                                    }
                                >
                                    <span>Sign Up</span>
                                </NavLink></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-extrabold font-sans">Book World</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 font-sans">



                        <li> <NavLink
                            to={`/`}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                        >
                            Home
                        </NavLink></li>

                        <li> <NavLink
                            to={`/bookList`}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                        >
                            Listed Books
                        </NavLink></li>


                        <li> <NavLink
                            to={`/pageReadCharts`}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                        >
                            Pages to Read
                        </NavLink></li>


                        <li> <NavLink
                            to={`/booksOfJournals`}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                        >
                            Books and Journals
                        </NavLink></li>



                        <li> <NavLink
                            to={`/aboutus`}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                        >
                            About Us
                        </NavLink></li>



                    </ul>
                </div>
                <div className=" hidden gap-2  lg:flex navbar-end  ">
                    <NavLink
                        to={`/signIn`}
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "active"
                                : isPending
                                    ? "pending"
                                    : ""
                        }
                    >
                        <span className="btn btn-success btn-outline rounded-xl">  Sign In</span>
                    </NavLink>

                    <NavLink
                        to={`/signUp`}
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "active"
                                : isPending
                                    ? "pending"
                                    : ""
                        }
                    >
                        <span className="btn rounded-xl btn-info btn-outline">Sign Up</span>
                    </NavLink>

                </div>

            </div>
        </div>
    );
};

export default Nav;