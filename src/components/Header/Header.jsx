import React from "react"
import { NavLink, Link } from "react-router-dom"
import { ShoppingCart } from "lucide-react"
import { useSearch } from "../../contexts/SearchContext"

const Header = () => {
  const { searchQuery, updateSearchQuery } = useSearch()

  const handleInputChange = (e) => {
    updateSearchQuery(e.target.value)
  }

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-[#19181D] text-white  border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <h1 className="text-3xl font-semibold">Arcade</h1>
          </Link>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "underline underline-offset-2"
                        : "text-gray-500"
                    } block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Discover
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/store"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "underline underline-offset-2"
                        : "text-gray-500"
                    } block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Browse
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center lg:order-2">
            <div className="text-gray-800  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
              <input
                type="text"
                placeholder="search store"
                value={searchQuery}
                onChange={handleInputChange}
                className="px-4 py-2 rounded-lg hover:ring-zinc-800"
              />
            </div>
            <Link
              to="/cart"
              className="text-white  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              <ShoppingCart />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
