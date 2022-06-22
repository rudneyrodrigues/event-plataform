import { Logo } from "./Logo"

export const Header = () => {
  return (
    <header className="w-full py-5 px-4 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
    </header>
  )
}