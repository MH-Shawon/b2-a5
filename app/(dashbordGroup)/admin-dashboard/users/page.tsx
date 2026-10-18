import { getAllUsersByAdmin } from "@/service/admin/getAllUsersByAdmin";
import UsersTable from "./_components/usersTable";


export default async function UsersPage() {
  const users = await getAllUsersByAdmin();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Users
        </h1>

        <p className="text-sm text-muted-foreground">
          Manage all registered users and their account status.
        </p>
      </div>

      <UsersTable users={users} />
    </div>
  );
}