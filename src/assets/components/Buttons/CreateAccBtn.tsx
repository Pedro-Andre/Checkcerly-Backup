import { Link } from "react-router-dom";

function CreateAccBtn() {
  return (
    <Link to="/criar-conta">
      <button className="body-btn">Criar conta</button>
    </Link>
  );
}

export default CreateAccBtn;
