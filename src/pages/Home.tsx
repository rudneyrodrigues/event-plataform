import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <h1 className="text-2xl font-bold text-white">Home page</h1>
      <Link to="/event" className="bg-green-500 p-2 rounded text-white hover:bg-green-700 transition-colors">
        Acessar videos
      </Link>
    </div>
  )
}
