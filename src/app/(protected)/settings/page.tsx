import { auth, signOut } from "@/auth"
import { toast } from "@/components/ui/use-toast"

const SettingsPage = async () => {
  const session = await auth()

  return (
    <div>
      {JSON.stringify(session)}
      <form action={async () => {
        "use server"

        await signOut()
      }}>
        <button type="submit">
          Sign out
        </button>
      </form>
    </div>
  )
}

export default SettingsPage