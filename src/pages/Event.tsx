import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Player } from "../components/Player"
import { Sidebar } from "../components/Sidebar"

export const Event = () => {
  const { slug } = useParams<{slug: string}>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="xl:flex flex-1 w-full max-w-screen-2xl mx-auto">
        {slug ? <Player lessonSlug={slug} /> : <div className="flex-1" />}

        <Sidebar />
      </main>
    </div>
  )
}
