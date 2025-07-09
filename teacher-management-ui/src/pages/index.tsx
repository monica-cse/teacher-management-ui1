import { useState, useEffect } from "react";
import { Teacher } from "@/src/types/teacher";
import { TeacherCard } from "@/src/components/TeacherCard";
import { TeacherForm } from "@/src/components/TeacherForm";

const dummyTeachers: Teacher[] = [
  {
    id: "1",
    name: "Anita Sharma",
    email: "anita@school.com",
    subject: "Mathematics",
    phone: "9876543210",
  },
  {
    id: "2",
    name: "Ravi Kumar",
    email: "ravi@school.com",
    subject: "Science",
    phone: "9876543200",
  },
];

export default function HomePage() {
  const [teachers, setTeachers] = useState<Teacher[]>(dummyTeachers);
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("teachers");
    if (stored) {
      setTeachers(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("teachers", JSON.stringify(teachers));
  }, [teachers]);

  const handleAddOrUpdate = (teacher: Teacher) => {
    if (editingTeacher) {
      setTeachers((prev) =>
        prev.map((t) => (t.id === teacher.id ? teacher : t))
      );
      setEditingTeacher(null);
    } else {
      setTeachers((prev) => [...prev, teacher]);
    }
  };

  const handleEdit = (teacher: Teacher) => {
    setEditingTeacher(teacher);
  };

  const handleDelete = (id: string) => {
    const confirm = window.confirm("Are you sure you want to delete this teacher?");
    if (confirm) {
      setTeachers((prev) => prev.filter((t) => t.id !== id));
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Teacher Management
        </h1>

        <TeacherForm
          onSave={handleAddOrUpdate}
          initialData={editingTeacher}
          key={editingTeacher?.id || "new"}
        />

        <hr className="my-6" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teachers.map((teacher) => (
            <TeacherCard
              key={teacher.id}
              teacher={teacher}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
