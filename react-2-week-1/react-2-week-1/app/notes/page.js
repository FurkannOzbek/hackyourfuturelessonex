"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Notes() {
  const [data, setData] = useState({
    notetaker: "",
    noteId: "",
  });
  const router = useRouter();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setData({ ...data, [e.target.id]: e.target.value });
    console.log(data);
  };

  const handleClick = () => {
    router.push(`/notes/${data.noteId}?notetaker=${data.notetaker}`);
  };
  return (
    <>
      <h1> notes </h1>
      <label> NoteTaker</label>

      <input
        type="text"
        name="notetaker"
        id="notetaker"
        value={data.notetaker}
        onChange={handleChange}
      />
      <label> Note ID </label>
      <input
        type="text"
        name="noteId"
        id="noteId"
        value={data.id}
        onChange={handleChange}
      />
      <button onClick={handleClick}> Send </button>
    </>
  );
}
