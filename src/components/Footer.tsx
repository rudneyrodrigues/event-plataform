import { LogoRocket } from "./LogoRocket"

export const Footer = () => {
  return (
    <footer className="w-full max-w-screen-2xl mx-auto flex items-center gap-6 pt-5 mt-16 border-t border-gray-500">
      <LogoRocket />

      <span>Rocketseat - Todos os diretos reservados</span>

      <span className="ml-auto">Políticas de privacidade</span>
    </footer>
  )
}
