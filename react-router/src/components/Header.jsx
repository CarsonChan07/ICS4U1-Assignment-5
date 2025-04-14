import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate();

  return (
    <div>
        <h1>Netflix 2</h1>
        <button onClick={()=>navigate('/login')}>Login</button>
        <button onClick={()=>navigate('/register')}>Register</button>
    </div>
  )
}

export default Header