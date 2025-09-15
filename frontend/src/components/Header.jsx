import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-black border-b-2 border-white p-2">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-semibold  text-white hover:text-indigo-700"
        >
          Task Manager
        </Link>
        <button
          onClick={handleLogout}
          className="bg-white px-4 font-mono text-lg py-2 rounded hover:bg-red-500"
        >
          Logout
        </button>
      </nav>
    </header>
  );
}

export default Header;
