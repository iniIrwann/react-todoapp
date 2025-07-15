import React from "react";

export const KegiatanList = ({
    filteredKegiatan,
    editId,
    setEditId,
    inputEdit,
    setInputEdit,
    handleSaveEdit,
    handleDeleteKegiatan,
    handleEditKegiatan,
    toggleDone,
}) => {
    return (
    <>
      <ul className="mt-4">
        {filteredKegiatan.map((item) => (
          <li key={item.id} className=" mb-2">
            {editId === item.id ? (
              <form
                onSubmit={handleSaveEdit}
                className="flex items-center space-x-2 mb-2"
              >
                <input
                  type="text"
                  value={inputEdit}
                  onChange={(e) => setInputEdit(e.target.value)}
                  className="flex-1 border-1 border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition-colors duration-200"
                >
                  Simpan
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditId("");
                    setInputEdit("");
                  }}
                  className="bg-gray-300 text-black px-3 py-1 rounded-lg hover:bg-gray-400 transition-colors duration-200"
                >
                  Batal
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-between space-x-2 mb-2">
                <div className="flex">
                  <input
                    type="checkbox"
                    className="mr-2"
                    onChange={() => toggleDone(item.id)}
                    checked={item.status}
                  />
                  <span
                    className={item.status ? "line-through text-gray-500" : ""}
                  >
                    {item.name}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    className="text-red-500 hover:underline "
                    onClick={() => handleDeleteKegiatan(item.id)}
                  >
                    Hapus
                  </button>
                  <button
                    className="text-blue-500 hover:underline "
                    onClick={() => handleEditKegiatan(item.id)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
