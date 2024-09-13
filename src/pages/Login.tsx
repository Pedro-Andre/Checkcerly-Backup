import Nav from "../assets/components/Nav/Nav";
import LoginPage from "../assets/components/LoginPage/LoginPage";
import LoginBtn from "../assets/components/Buttons/LoginBtn";

function Login() {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>

      <section className="main login">
        <LoginPage />
        <LoginBtn />
      </section>
    </>
  );
}

export default Login;
