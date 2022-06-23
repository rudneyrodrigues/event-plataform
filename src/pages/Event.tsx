import { Header } from "../components/Header"
import { Player } from "../components/Player"
import { Sidebar } from "../components/Sidebar"

export const Event = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1 w-full max-w-screen-2xl mx-auto">
        <Player />

        <Sidebar />
      </main>
    </div>
  )
}
