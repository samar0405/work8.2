import { auth } from "@service";
import { saveAccessToken } from "@token-service";
const SignIn = async () => {
  try {
    const { data }: any = await auth.sign_in({
      email: "roziboyevarslon0110@gmail.com",
      password: "Admin10",
    });
    const { access_token } = data;
    if (access_token) {
      saveAccessToken("access_token", access_token);
    }
  } catch (error) {
    console.log(error);
  }
};

const Index = () => {
  return (
    <>
      <div>
        <h1>SignIn</h1>
        <button onClick={SignIn}>SignIn</button>
      </div>
    </>
  );
};
export default Index;

// // export default Index;
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { saveAccessToken } from "@token-service";
// // import {
// //   TextField,
// //   Button,
// //   IconButton,
// //   InputAdornment,
// //   FormHelperText,
// // } from "@mui/material";
// // import { Visibility, VisibilityOff } from "@mui/icons-material";
// // import { auth } from "@service";
// // import { Request } from "@auth-type";
// // import { ToastContainer, toast } from "react-toastify";
// // import { Formik, Form, Field, FieldProps } from "formik";
// // import * as Yup from "yup";
// // import "react-toastify/dist/ReactToastify.css";

// // interface FormValues {
// //   email: string;
// //   password: string;
// // }

// // const validationSchema = Yup.object({
// //   email: Yup.string()
// //     .email("Invalid email format")
// //     .required("Email is required"),
// //   password: Yup.string()
// //     .matches(
// //       /^(?=.*[a-z])(?=.*[A-Z]).{7,}$/,
// //       "Password must contain at least 7 characters, one uppercase and one lowercase letter"
// //     )
// //     .required("Password is required"),
// // });

// // const Index: React.FC = () => {
// //   const [showPassword, setShowPassword] = useState(false);
// //   const navigate = useNavigate();

// //   const handleClickShowPassword = () => {
// //     setShowPassword(!showPassword);
// //   };

// //   const handleSubmit = async (
// //     values: FormValues,
// //     { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
// //   ) => {
// //     try {
// //       const { data }: any = await auth.sign_in({
// //         email: "roziboyevarslon0110@gmail.com",
// //         password: "Admin10",
// //       });
// //       const { access_token } = data;
// //       if (access_token) {
// //         saveAccessToken("access_token", access_token);
// //       }
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   return (
// //     <>
// //       <div className="w-full h-screen flex items-center justify-center">
// //         <div className="w-full sm:w-[600px] p-5 bg-white shadow-md rounded-lg">
// //           <h1 className="text-center my-6 text-[40px]">Login</h1>
// //           <Formik
// //             initialValues={{ email: "", password: "" }}
// //             validationSchema={validationSchema}
// //             onSubmit={handleSubmit}
// //           >
// //             {({ isSubmitting }) => (
// //               <Form className="flex flex-col gap-6">
// //                 <Field name="email">
// //                   {({ field, meta }: FieldProps) => (
// //                     <div>
// //                       <TextField
// //                         {...field}
// //                         type="email"
// //                         fullWidth
// //                         label="Email"
// //                         error={meta.touched && Boolean(meta.error)}
// //                       />
// //                       {meta.touched && meta.error && (
// //                         <FormHelperText error>{meta.error}</FormHelperText>
// //                       )}
// //                     </div>
// //                   )}
// //                 </Field>
// //                 <Field name="password">
// //                   {({ field, meta }: FieldProps) => (
// //                     <div>
// //                       <TextField
// //                         {...field}
// //                         type={showPassword ? "text" : "password"}
// //                         fullWidth
// //                         label="Password"
// //                         error={meta.touched && Boolean(meta.error)}
// //                         InputProps={{
// //                           endAdornment: (
// //                             <InputAdornment position="end">
// //                               <IconButton
// //                                 aria-label="toggle password visibility"
// //                                 onClick={handleClickShowPassword}
// //                                 edge="end"
// //                               >
// //                                 {showPassword ? (
// //                                   <VisibilityOff />
// //                                 ) : (
// //                                   <Visibility />
// //                                 )}
// //                               </IconButton>
// //                             </InputAdornment>
// //                           ),
// //                         }}
// //                       />
// //                       {meta.touched && meta.error && (
// //                         <FormHelperText error>{meta.error}</FormHelperText>
// //                       )}
// //                     </div>
// //                   )}
// //                 </Field>
// //                 <Button
// //                   variant="contained"
// //                   type="submit"
// //                   disabled={isSubmitting}
// //                 >
// //                   Sign In
// //                 </Button>
// //               </Form>
// //             )}
// //           </Formik>
// //         </div>
// //       </div>
// //       <ToastContainer />
// //     </>
// //   );
// // };

// // export default Index;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { saveAccessToken } from "@token-service";
// import {
//   TextField,
//   Button,
//   IconButton,
//   InputAdornment,
//   FormHelperText,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { auth } from "@service";
// import { ToastContainer, toast } from "react-toastify";
// import { Formik, Form, Field, FieldProps } from "formik";
// import * as Yup from "yup";
// import "react-toastify/dist/ReactToastify.css";

// interface FormValues {
//   email: string;
//   password: string;
// }

// const validationSchema = Yup.object({
//   email: Yup.string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   password: Yup.string()
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z]).{7,}$/,
//       "Password must contain at least 7 characters, one uppercase and one lowercase letter"
//     )
//     .required("Password is required"),
// });

// const Index: React.FC = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = async (
//     values: FormValues,
//     { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
//   ) => {
//     try {
//       const { data }: any = await auth.sign_in({
//         email: values.email,
//         password: values.password,
//       });

//       const { access_token } = data;
//       if (access_token) {
//         saveAccessToken("access_token", access_token);
//         toast.success("Successfully signed in!");
//         setTimeout(() => {
//           navigate("/main");
//         }, 1500);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Failed to sign in. Please check your credentials.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <div className="w-full h-screen flex items-center justify-center">
//         <div className="w-full sm:w-[600px] p-5 bg-white shadow-md rounded-lg">
//           <h1 className="text-center my-6 text-[40px]">Login</h1>
//           <Formik
//             initialValues={{ email: "", password: "" }}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ isSubmitting }) => (
//               <Form className="flex flex-col gap-6">
//                 <Field name="email">
//                   {({ field, meta }: FieldProps) => (
//                     <div>
//                       <TextField
//                         {...field}
//                         type="email"
//                         fullWidth
//                         label="Email"
//                         error={meta.touched && Boolean(meta.error)}
//                       />
//                       {meta.touched && meta.error && (
//                         <FormHelperText error>{meta.error}</FormHelperText>
//                       )}
//                     </div>
//                   )}
//                 </Field>
//                 <Field name="password">
//                   {({ field, meta }: FieldProps) => (
//                     <div>
//                       <TextField
//                         {...field}
//                         type={showPassword ? "text" : "password"}
//                         fullWidth
//                         label="Password"
//                         error={meta.touched && Boolean(meta.error)}
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">
//                               <IconButton
//                                 aria-label="toggle password visibility"
//                                 onClick={handleClickShowPassword}
//                                 edge="end"
//                               >
//                                 {showPassword ? (
//                                   <VisibilityOff />
//                                 ) : (
//                                   <Visibility />
//                                 )}
//                               </IconButton>
//                             </InputAdornment>
//                           ),
//                         }}
//                       />
//                       {meta.touched && meta.error && (
//                         <FormHelperText error>{meta.error}</FormHelperText>
//                       )}
//                     </div>
//                   )}
//                 </Field>
//                 <Button
//                   variant="contained"
//                   type="submit"
//                   disabled={isSubmitting}
//                 >
//                   Sign In
//                 </Button>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default Index;
