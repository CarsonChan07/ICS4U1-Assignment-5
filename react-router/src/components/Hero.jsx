import { useNavigate } from "react-router-dom"

function Hero() {
  const navigate = useNavigate();

  return (
    <div>
        <h1>Netflix, but better.</h1>
        <p>Unlimited Movies, TV Shows, and More.</p>
    </div>
  )
}

export default Hero