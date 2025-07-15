import React, { useEffect, useState } from "react";

function useKegiatann() {
  const [filter, setFilter] = useState("");
  const [editId, setEditId] = useState("");
  const [inputEdit, setInputEdit] = useState("");
  const [kegiatan, setKegiatan] = useState([]);
  const [inputKegiatan, setInputKegiatan] = useState("");
  const [error, setError] = useState("");

  const handleEditKegiatan = (id) => {
    const kegiatanToEdit = kegiatan.find((item) => item.id === id);
    if (kegiatanToEdit) {
      setInputEdit(kegiatanToEdit.name);
      setEditId(id);
    }
  };

  const filteredKegiatan = kegiatan.filter((item) => {
    if (filter === "selesai") {
      return item.status === true;
    } else if (filter === "belum") {
      return item.status === false;
    } else {
      return true;
    }
  });

  const handleSaveEdit = (event) => {
    event.preventDefault();
    if (inputEdit.trim() === "") return;

    const updatedKegiatan = kegiatan.map((item) =>
      item.id === editId ? { ...item, name: inputEdit.trim() } : item
    );
    setKegiatan(updatedKegiatan);
    setEditId("");
    setInputEdit("");
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("kegiatan")) || [];
    setKegiatan(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("kegiatan", JSON.stringify(kegiatan));
  }, [kegiatan]);

  const handleAddKegiatan = (event) => {
    // Prevent adding empty kegiatan
    event.preventDefault();
    if (inputKegiatan.trim() === "") {
      setError("Nama kegiatan tidak boleh kosong");
      return;
    }

    if (inputKegiatan.trim().length < 3) {
      setError("Nama kegiatan harus terdiri dari minimal 3 karakter");
      return;
    }
    
    const newKegiatan = {
        id: Date.now(),
        name: inputKegiatan.trim(),
        status: false,
    };
    
    setKegiatan([...kegiatan, newKegiatan]);
    setError("");
    setInputKegiatan("");
  };

  const toggleDone = (id) => {
    const KegiatanDone = kegiatan.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setKegiatan(KegiatanDone);
  };

  const handleDeleteKegiatan = (id) => {
    const newKegiatan = kegiatan.filter((item) => item.id !== id);
    setKegiatan(newKegiatan);
    // const newKegiatan = [...kegiatan];
    // newKegiatan.splice(id, 1);
    // setKegiatan(newKegiatan);
  };
  return {
    filter,
    setFilter,
    editId,
    setEditId,
    inputEdit,
    setInputEdit,
    kegiatan,
    setKegiatan,
    inputKegiatan,
    setInputKegiatan,
    handleEditKegiatan,
    filteredKegiatan,
    handleSaveEdit,
    handleAddKegiatan,
    toggleDone,
    handleDeleteKegiatan,
    error,
    setError,
  };
}

export default useKegiatann;
