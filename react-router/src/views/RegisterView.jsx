import { Link } from "react-router-dom"
import Footer from "../components/Footer"

function RegisterView() {
  
  return (
    <div>
        <h1>Register</h1>
        <button onClick={()=>navigate('/movies')}>Sign-up</button>
        <Footer />
    </div>
  )
}

export default RegisterView