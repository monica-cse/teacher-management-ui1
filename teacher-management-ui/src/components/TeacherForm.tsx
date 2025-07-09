// src/components/TeacherForm.tsx
import { useState, useEffect } from "react";
import { Teacher } from "@/src/types/teacher";

interface Props {
  onSave: (teacher: Teacher) => void;
  initialData?: Teacher | null;
  onCancel?: () => void;
}

const subjects = ["Mathematics", "Physics", "Chemistry", "English", "Computer Science"];
const departments = ["Science", "Arts", "Humanities", "Technology", "Mathematics"];

export const TeacherForm = ({ onSave, initialData, onCancel }: Props) => {
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
    location: ""
  });

  const [newClass, setNewClass] = useState("");

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddClass = () => {
    if (newClass.trim()) {
      setFormData(prev => ({
        ...prev,
        classes: [...(prev.classes || []), newClass]
      }));
      setNewClass("");
    }
  };

  const handleRemoveClass = (index: number) => {
    setFormData(prev => ({
      ...prev,
      classes: prev.classes?.filter((_, i) => i !== index) || []
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    const teacher: Teacher = {
      ...formData,
      id: initialData?.id || crypto.randomUUID(),
      location: `${formData.city}, ${formData.state}`
    };

    onSave(teacher);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold mb-6">
        {initialData ? "Edit Teacher" : "Add New Teacher"}
      </h1>

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
                placeholder="Enter first name"
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
                placeholder="Enter last name"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 p-2 rounded"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full border border-gray-300 p-2 rounded"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Professional Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject *
              </label>
              <select
                name="subject"
                className="w-full border border-gray-300 p-2 rounded"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Department *
              </label>
              <select
                name="department"
                className="w-full border border-gray-300 p-2 rounded"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select a department</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Years of Experience *
              </label>
              <input
                type="number"
                name="yearsOfExperience"
                className="w-full border border-gray-300 p-2 rounded"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                placeholder="Enter years of experience"
                required
                min="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Qualification *
              </label>
              <input
                type="text"
                name="qualification"
                className="w-full border border-gray-300 p-2 rounded"
                value={formData.qualification}
                onChange={handleChange}
                placeholder="e.g., M.S. in Computer Science"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Address Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Street Address *
              </label>
              <input
                type="text"
                name="streetAddress"
                className="w-full border border-gray-300 p-2 rounded"
                value={formData.streetAddress}
                onChange={handleChange}
                placeholder="Enter street address"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City *
              </label>
              <input
                type="text"
                name="city"
                className="w-full border border-gray-300 p-2 rounded"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State *
              </label>
              <input
                type="text"
                name="state"
                className="w-full border border-gray-300 p-2 rounded"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ZIP Code *
              </label>
              <input
                type="text"
                name="zipCode"
                className="w-full border border-gray-300 p-2 rounded"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="Enter ZIP code"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Classes</h2>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              className="flex-1 border border-gray-300 p-2 rounded"
              value={newClass}
              onChange={(e) => setNewClass(e.target.value)}
              placeholder="Enter class name"
            />
            <button
              type="button"
              onClick={handleAddClass}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Add
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {formData.classes?.map((cls, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                <span>{cls}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveClass(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            {initialData ? "Update Teacher" : "Add Teacher"}
          </button>
        </div>
      </form>
    </div>
  );
};