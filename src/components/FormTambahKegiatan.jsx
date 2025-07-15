import React from "react";

function FormTambahKegiatan({
  inputKegiatan,
  setInputKegiatan,
  handleAddKegiatan,
  error,
  setError,
}) {
  return (
    <>
      <form onSubmit={handleAddKegiatan}>
        <div className="flex w-full items-center justify-between mt-2 ">
            <input
              type="text"
              placeholder="Contoh: Belajar React"
              value={inputKegiatan}
              onChange={(e) => setInputKegiatan(e.target.value)}
              className="w-full border-1 border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:border-blue-500"
            />
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-1 rounded-lg ml-2 hover:bg-blue-600 transition-colors duration-200"
            >
            Tambah
          </button>
        </div>
            {error && <p class="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </>
  );
}

export default FormTambahKegiatan;
