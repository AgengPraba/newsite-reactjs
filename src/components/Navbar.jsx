import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div class="container mx-auto">
        <div class="navbar-start flex justify-between w-full">
          <div class="dropdown sm:hidden">
            <div tabindex="0" role="button" class="btn btn-ghost sm:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <NavLink to="/" className="text-base-content">Home</NavLink>
              </li>
              <li>
                <NavLink to="/business" className="text-base-content">Business</NavLink>
              </li>
              <li>
                <NavLink to="/entertainment" className="text-base-content">Entertainment</NavLink>
              </li>
              <li>
                <NavLink to="/general" className="text-base-content">General</NavLink>
              </li>
              <li>
                <NavLink to="/health" className="text-base-content">Health</NavLink>
              </li>
              <li>
                <NavLink to="/science" className="text-base-content">Science</NavLink>
              </li>
              <li>
                <NavLink to="/sports" className="text-base-content">Sports</NavLink>
              </li>
              <li>
                <NavLink to="/technology"className="text-base-content">Technology</NavLink>
              </li>
            </ul>
          </div>
          <a href="/" class="text-3xl font-bold ml-4 sm:text-6xl"><span class="text-red-600">news</span>ite</a>
          <div className="justify-end ml-4">
          <label class="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path
                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input type="checkbox" value="dark" class="toggle theme-controller" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          </div>
        </div>
        <div class="navbar-center hidden sm:flex">
          <ul class="menu menu-horizontal px-1 mr-5">
            <li>
              <NavLink to="/" className="text-base-content">Home</NavLink>
            </li>
            <li>
              <NavLink to="/business" className="text-base-content">Business</NavLink>
            </li>
            <li>
              <NavLink to="/entertainment" className="text-base-content">Entertainment</NavLink>
            </li>
            <li>
              <NavLink to="/general" className="text-base-content">General</NavLink>
            </li>
            <li>
              <NavLink to="/health" className="text-base-content">Health</NavLink>
            </li>
            <li>
              <NavLink to="/science" className="text-base-content">Science</NavLink>
            </li>
            <li>
              <NavLink to="/sports" className="text-base-content">Sports</NavLink>
            </li>
            <li>
              <NavLink to="/technology"className="text-base-content">Technology</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;