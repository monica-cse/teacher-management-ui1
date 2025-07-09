import { useRouter } from "next/router";
import { useState } from "react";
import { Teacher } from "@/src/types/teacher";

const subjects = ["Mathematics", "Physics", "Chemistry", "English", "Computer Science"];
const departments = ["Science", "Arts", "Humanities", "Technology", "Mathematics"];

export default function AddTeacherPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<Omit<Teacher, "id">>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    department: "",
    yearsOfExperience: 0,
    qualification: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    classes: [],
    status: "active",
    students: 0,
    rating: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save logic here
    console.log("New teacher:", formData);
    router.push("/teachers");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <button
            onClick={() => router.back()}
            className="mr-4 text-blue-600 hover:text-blue-800"
          >
            ← Back
          </button>
          <h1 className="text-2xl font-bold">Add New Teacher</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full border border-gray-300 p-2 rounded"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full border border-gray-300 p-2 rounded"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Other form sections (Contact, Professional, Address) */}
            {/* ... Include all the other form fields from previous examples ... */}

            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={() => router.push("/teachers")}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Add Teacher
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}