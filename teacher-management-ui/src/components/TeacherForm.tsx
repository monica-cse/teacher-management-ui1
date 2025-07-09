import { useState, useEffect } from "react";
import { Teacher } from "@/src/types/teacher";

interface Props {
  onSave: (teacher: Teacher) => void;
  initialData?: Teacher | null;
}

export const TeacherForm = ({ onSave, initialData }: Props) => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setSubject(initialData.subject);
      setEmail(initialData.email);
    } else {
      setName("");
      setSubject("");
      setEmail("");
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !subject.trim() || !email.trim()) {
      alert("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Enter a valid email");
      return;
    }

    const updatedTeacher: Teacher = {
      id: initialData?.id || crypto.randomUUID(),
      name,
      subject,
      email,
    };

    onSave(updatedTeacher);
    setName("");
    setSubject("");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-50 p-4 rounded-lg shadow"
    >
      <input
        type="text"
        placeholder="Name"
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Subject"
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition hover:scale-105 active:scale-95">
        {initialData ? "Update Teacher" : "Add Teacher"}
      </button>
    </form>
  );
};
