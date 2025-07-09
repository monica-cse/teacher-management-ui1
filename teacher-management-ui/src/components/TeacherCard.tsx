// src/components/TeacherCard.tsx
import { Teacher } from "@/src/types/teacher";

interface Props {
  teacher: Teacher;
  onEdit: (teacher: Teacher) => void;
  onDelete: (id: string) => void;
  onClick?: (teacher: Teacher) => void;
}

export const TeacherCard = ({ teacher, onEdit, onDelete, onClick }: Props) => {
  return (
    <div 
      className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition cursor-pointer"
      onClick={() => onClick && onClick(teacher)}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h2 className="text-lg font-bold">{teacher.firstName} {teacher.lastName}</h2>
          <p className="text-gray-600">{teacher.subject} Teacher</p>
        </div>
        {teacher.rating && (
          <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-bold">
            {teacher.rating.toFixed(1)}
          </div>
        )}
      </div>

      <div className="space-y-1 text-sm text-gray-600 mb-3">
        <p>{teacher.email}</p>
        <p>{teacher.phone}</p>
        <p>{teacher.city}, {teacher.state}</p>
      </div>

      {teacher.status === 'onLeave' && (
        <p className="text-sm text-yellow-600 mb-2">On Leave</p>
      )}

      {teacher.students && (
        <p className="text-sm text-gray-700 mb-2">{teacher.students} Students</p>
      )}

      {teacher.classes && teacher.classes.length > 0 && (
        <div className="mb-3">
          <p className="text-sm font-medium text-gray-700 mb-1">Classes:</p>
          <div className="flex flex-wrap gap-1">
            {teacher.classes.slice(0, 2).map((cls, index) => (
              <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                {cls}
              </span>
            ))}
            {teacher.classes.length > 2 && (
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                +{teacher.classes.length - 2} more
              </span>
            )}
          </div>
        </div>
      )}

      <div className="flex justify-end gap-2">
        <button
          className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(teacher);
          }}
        >
          Edit
        </button>
        <button
          className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(teacher.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};