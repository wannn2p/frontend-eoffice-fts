import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate(); // Menggunakan useNavigate untuk melakukan redirect

  // Fungsi untuk menangani login (dengan login dummy)
  const handleLogin = (values) => {
    console.log("Login submitted:", values);

    // Dummy validation: email dan password hardcoded
    if (values.email === "user@example.com" && values.password === "password123") {
      // Jika email dan password cocok, arahkan ke dashboard
      navigate("/dashboard");
    } else {
      alert("Email atau Password salah");
    }
  };

  // Schema validasi dengan Yup
  const validationSchema = Yup.object({
    email: Yup.string().email("Email tidak valid").required("Email wajib diisi"),
    password: Yup.string().required("Password wajib diisi"),
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login e-Office</h2>
      <Formik initialValues={{ email: "", password: "" }} onSubmit={handleLogin} validationSchema={validationSchema}>
        <Form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <Field name="email" type="email" placeholder="you@example.com" className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
            <ErrorMessage name="email" component="div" className="text-sm text-red-500 mt-1" />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <Field name="password" type="password" placeholder="••••••••" className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
            <ErrorMessage name="password" component="div" className="text-sm text-red-500 mt-1" />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}
