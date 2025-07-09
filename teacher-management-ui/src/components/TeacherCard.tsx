import { Teacher } from "@/src/types/teacher";

interface Props {
  teacher: Teacher;
  onEdit: (teacher: Teacher) => void;
  onDelete: (id: string) => void;
}

export const TeacherCard = ({ teacher, onEdit, onDelete }: Props) => {
  return (
    <div className="bg-gray-50 shadow rounded-lg p-4 hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      <h2 className="text-lg font-semibold text-gray-800">{teacher.name}</h2>
      <p className="text-sm text-gray-600">{teacher.subject}</p>
      <p className="text-sm text-gray-500">{teacher.email}</p>
      {teacher.phone && <p className="text-sm text-gray-500">{teacher.phone}</p>}

      <div className="mt-4 flex gap-2">
        <button
          className="text-sm bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition hover:scale-105 active:scale-95"
          onClick={() => onEdit(teacher)}
        >
          Edit
        </button>
        <button
          className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition hover:scale-105 active:scale-95"
          onClick={() => onDelete(teacher.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
