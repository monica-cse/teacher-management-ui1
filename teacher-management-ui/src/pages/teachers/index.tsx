// src/pages/teachers/index.tsx
import { useState } from "react";
import { useRouter } from "next/router";
import { TeacherCard } from "@/src/components/TeacherCard";
import { Teacher } from "@/src/types/teacher";

const AllTeachersPage = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [teachers, setTeachers] = useState<Teacher[]>([]); // Load from API or context

  // This would come from your API or context
  const dummyTeachers: Teacher[] = [
    {
      id: "1",
      firstName: "Sarah",
      lastName: "Wilson",
      email: "sarah.wilson@school.edu",
      phone: "+1 (555) 123-4567",
      subject: "Physics",
      department: "Science",
      yearsOfExperience: 8,
      qualification: "Ph.D. in Physics",
      streetAddress: "123 University Ave",
      city: "Springfield",
      state: "CA",
      zipCode: "12345",
      rating: 4.9,
      students: 156,
      status: "active",
      classes: ["Grade 11 Physics", "Grade 12 Advanced Physics"],
      location: "Springfield, CA"
    },
    // Add more teachers as needed
  ];

  const filteredTeachers = dummyTeachers.filter(teacher =>
    `${teacher.firstName} ${teacher.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTeacherClick = (teacher: Teacher) => {
    router.push(`/teachers/${teacher.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h1 className="text-2xl font-bold mb-4">All Teachers</h1>
          <p className="text-gray-600 mb-6">Manage and view all registered teachers</p>
          
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search teachers..."
              className="w-full max-w-md border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTeachers.map(teacher => (
              <TeacherCard
                key={teacher.id}
                teacher={teacher}
                onEdit={() => {}}
                onDelete={() => {}}
                onClick={handleTeacherClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTeachersPage;