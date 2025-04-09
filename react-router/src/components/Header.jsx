import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate();

  return (
    <div>
        <button onClick={navigate('/LoginView')}>Login</button>
        <button onClick={navigate('/RegisterView')}>Register</button>
    </div>
  )
}

export default Header