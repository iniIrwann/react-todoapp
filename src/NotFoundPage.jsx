import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <div className="my-0 min-h-screen bg-gradient-to-tr from-purple-600 to-amber-400 flex items-center justify-center px-4">
        <div className="text-center text-white">
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <p className="text-2xl md:text-3xl font-semibold mb-4">
            Oops! Halaman tidak ditemukan.
          </p>
          <p className="mb-8 text-lg">
            Halaman yang kamu cari mungkin telah dipindahkan atau tidak ada.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-white text-purple-700 font-bold rounded-lg shadow-md hover:bg-purple-100 transition-all duration-200"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </>
  );
}
