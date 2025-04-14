import { useNavigate } from "react-router-dom"

function Footer() {
  const navigate = useNavigate();

  return (
    <div>
        <p>&copy; 2025 Netflix 2. All rights reserved.</p>
    </div>
  )
}

export default Footer