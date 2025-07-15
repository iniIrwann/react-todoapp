import Header from "../components/Header";
import { KegiatanList } from "../components/KegiatanList";
import FormTambahKegiatan from "../components/FormTambahKegiatan";
import useKegiatann from "../hooks/useKegiatann";
import { Link } from "react-router-dom";

function Todoapp() {
  const {
    filter,
    setFilter,
    editId,
    setEditId,
    inputEdit,
    setInputEdit,
    kegiatan,
    inputKegiatan,
    setInputKegiatan,
    handleEditKegiatan,
    handleSaveEdit,
    handleAddKegiatan,
    toggleDone,
    handleDeleteKegiatan,
    filteredKegiatan,
    error,
    setError,
  } = useKegiatann();

  return (
    <>
      <Header />
      <Link
        to={"/"}
        className="mt-16 inline-block px-6 py-3 bg-white text-pink-700 font-bold rounded-lg shadow-md hover:bg-purple-100 transition-all duration-200"
      >
        Navigate to Home Page
      </Link>
      <div className="mt-6 border-1 border-gray-300"></div>
      <div className="flex justify-between mt-6">
        <h1 className=" text-black ">Kegiatan Hari ini</h1>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border-1 border-gray-300 px-2 py-1 rounded-lg"
          id=""
        >
          <option value="">Semua</option>
          <option value="selesai">Selesai</option>
          <option value="belum">Belum</option>
        </select>
      </div>
      <div className="w-full border-1 border-gray-300 rounded-lg px-4 mt-2">
        <FormTambahKegiatan
          inputKegiatan={inputKegiatan}
          setInputKegiatan={setInputKegiatan}
          handleAddKegiatan={handleAddKegiatan}
          error={error}
          setError={setError}
        />
        <KegiatanList
          filteredKegiatan={filteredKegiatan}
          editId={editId}
          setEditId={setEditId}
          inputEdit={inputEdit}
          setInputEdit={setInputEdit}
          handleSaveEdit={handleSaveEdit}
          handleDeleteKegiatan={handleDeleteKegiatan}
          handleEditKegiatan={handleEditKegiatan}
          toggleDone={toggleDone}
        />
      </div>
    </>
  );
}

export default Todoapp;
