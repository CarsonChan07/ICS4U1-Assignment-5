import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"

function LoginView() {
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Login</h1>
      <button onClick={()=>navigate('/movies')}>Sign-in</button>
      <Footer />
    </div>
  )
}

export default LoginView