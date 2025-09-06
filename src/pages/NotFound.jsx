import SlideButton from "../components/common/SlideButton"

export default function NotFound() {

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="text-7xl p-5 font-family-oswald">{":("}</div>
      <h1 className="font-family-oswald text-8xl">404 - Not Found</h1>

      <SlideButton toLocation="/app" content="Volver al inicio" />
    </div>
  )
}