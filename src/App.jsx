import { Link } from "react-router-dom";
import "@/index.css";

function App() {
  return (
    <div className="flex justify-between space-x-2 text-center mt-10">
      {/* this navigate to landing page */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Landing Page
        </h1>
        <p className="mt-4">
          Klik tombol di bawah untuk mulai menggunakan landing page
        </p>
        <Link
          to={"/landing-page"}
          className="inline-block px-6 py-3 bg-white text-pink-700 font-bold rounded-lg shadow-md hover:bg-purple-100 transition-all duration-200"
        >
          Navigate to Landing Page
        </Link>
      </div>
      <div className="">
        <h1 className="text-3xl font-bold">
          Selamat Datang di Aplikasi Todo List
        </h1>
        <p className="mt-4">
          Klik tombol di bawah untuk mulai menggunakan aplikasi Todo List
        </p>
        <Link
          to={"/todoapp"}
          className="inline-block mt-6 px-6 py-3 bg-white text-purple-700 font-bold rounded-lg shadow-md hover:bg-purple-100 transition-all duration-200"
        >
          Mulai Todo App
        </Link>
      </div>
    </div>
  );
}

export default App;
