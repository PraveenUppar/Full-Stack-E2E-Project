import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-black border-b-2 border-white p-2">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-semibold  text-white hover:text-indigo-700"
        >
          Task Manager
        </Link>
      </nav>
    </header>
  );
}

export default Header;
