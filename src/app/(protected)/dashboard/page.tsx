import { auth } from "@/auth"
import Header from "../_components/header"

const Dashboard = async () => {
  const session = await auth()

  return (
    <div className="flex flex-col h-screen">
      <Header image={session?.user.image} username={session?.user.name} />

      {JSON.stringify(session)}

      <div className="flex flex-col h-screen">
        <div className="flex-1 p-4 flex items-center justify-center md:p-6" />
        <footer className="p-4 md:px-6">
          <div className="flex items-center justify-center">
            <span>Desenvolvido por @gabrielheifel ✌️</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Dashboard