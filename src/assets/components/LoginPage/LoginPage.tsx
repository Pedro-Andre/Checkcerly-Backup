// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import { ChangeEvent, useState } from "react";
// import "./LoginPage.css";
// import LoginBtn3 from "../Buttons/LoginBtn3";

// function LoginPage() {
//   const [LoginEmail, setLoginEmail] = useState<string>("");
//   const [LoginPass, setLoginPass] = useState<string>("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(LoginEmail);
//     console.log(LoginPass);

//     return (
//       <>
//         <div className="container">
//           <p className="container-title">Login</p>
//           <svg
//             width="100%"
//             height="40rem"
//             xmlns="http://www.w3.org/2000/svg"
//             className="svg-container"
//           >
//             <rect
//               rx="20"
//               width="100%"
//               height="40rem"
//               x="-0"
//               y="0"
//               stroke="url(#paint0_linear_227_259)"
//               strokeWidth="2"
//             />
//             <defs>
//               <linearGradient
//                 id="paint0_linear_227_259"
//                 x1="1.61353"
//                 y1="1.00342"
//                 x2="1297.61"
//                 y2="416.915"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#009D53" />
//                 <stop offset="1" stopColor="#F07F3D" />
//               </linearGradient>
//             </defs>
//           </svg>
//           <form action="" id="login-form" onSubmit={handleSubmit}>
//             <div className="inputs">
//               <label htmlFor="login-email">
//                 Email
//                 <input
//                   type="email"
//                   name="mail"
//                   id="login-email"
//                   placeholder="Seu email"
//                   value={LoginEmail}
//                   onChange={(e) => setLoginEmail(e.target.value)}
//                 />
//               </label>
//               <label htmlFor="login-pass">
//                 Senha
//                 <input
//                   type="password"
//                   name="senha"
//                   id="login-pass"
//                   placeholder="Sua senha"
//                   value={LoginPass}
//                   onChange={(e) => setLoginPass(e.target.value)}
//                 />
//               </label>
//             </div>
//             <Link to={"/nova-senha"} className="nova-senha">
//               Esqueceu a senha? Clique aqui para redefinir
//             </Link>
//             <LoginBtn3 />
//           </form>
//         </div>
//       </>
//     );
//   };
// }

// export default LoginPage;

import React, { useState } from "react";
import { CSSProperties } from "react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };
  const linkStyle: CSSProperties = {
    marginTop: "33rem",
  };
  return (
    <form id="login-form" onSubmit={handleSubmit} style={linkStyle}>
      <div>
        <label htmlFor="login-email">Email:</label>
        <input
          type="email"
          id="login-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="login-pass">Password:</label>
        <input
          type="password"
          id="login-pass"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
