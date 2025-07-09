import { useRouter } from "next/router";
import Link from "next/link";
import { Teacher } from "@/src/types/teacher";

export default function TeacherPage() {
  const router = useRouter();
  const { id } = router.query;

  // Example data - in a real app you would fetch this based on the ID
  const teacher = {
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
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Link
            href="/teachers"
            className="mr-4 text-blue-600 hover:text-blue-800"
          >
            ← Back to All Teachers
          </Link>
          <h1 className="text-2xl font-bold">Teacher Profile</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold">{teacher.firstName} {teacher.lastName}</h1>
              <p className="text-gray-600">{teacher.subject} Teacher</p>
            </div>
            <button
              onClick={() => router.push(`/teachers/${teacher.id}/edit`)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Edit
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Rating</h3>
              <p className="text-3xl font-bold">{teacher.rating?.toFixed(1)}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Status</h3>
              <p className={`text-xl font-bold ${
                teacher.status === 'active' ? 'text-green-600' : 'text-yellow-600'
              }`}>
                {teacher.status === 'onLeave' ? 'On Leave' : 'Active'}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Students</h3>
              <p className="text-3xl font-bold">{teacher.students}</p>
            </div>
          </div>

          {/* Rest of the teacher details */}
          {/* ... Include all the other details from previous examples ... */}
        </div>
      </div>
    </div>
  );
}