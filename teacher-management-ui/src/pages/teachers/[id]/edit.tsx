import { useRouter } from "next/router";
import { useState } from "react";
import { Teacher } from "@/src/types/teacher";

const subjects = ["Mathematics", "Physics", "Chemistry", "English", "Computer Science"];
const departments = ["Science", "Arts", "Humanities", "Technology", "Mathematics"];

export default function EditTeacherPage() {
  const router = useRouter();
  const { id } = router.query;

  // Example data - in a real app you would fetch this based on the ID
  const [formData, setFormData] = useState<Teacher>({
    id: "1",
    firstName: "Sarah",
    lastName: "Wilson",
    email: "sarah@school.com",
    phone: "+1 (555) 123-4567",
    subject: "Physics",
    department: "Science",
    yearsOfExperience: 8,
    qualification: "PhD in Physics",
    streetAddress: "123 University Ave",
    city: "Springfield",
    state: "CA",
    zipCode: "12345",
    rating: 4.9,
    students: 156,
    status: "active",
    classes: ["Grade 11 Physics", "Grade 12 Advanced Physics"],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Update logic here
    console.log("Updated teacher:", formData);
    router.push(`/teachers/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <button
            onClick={() => router.push(`/teachers/${id}`)}
            className="mr-4 text-blue-600 hover:text-blue-800"
          >
            ← Cancel
          </button>
          <h1 className="text-2xl font-bold">Edit Teacher</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Include all the form fields from the Add Teacher form */}
            {/* ... */}

            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={() => router.push(`/teachers/${id}`)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Update Teacher
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}