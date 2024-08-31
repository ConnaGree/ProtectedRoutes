import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useSelector } from "react-redux";

const AllUsers = () => {
  let allUsers = null;

  const { token } = useSelector((state) => state.user);
  console.log(token);

  try {
    fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(console.log);
  } catch (err) {
    throw new Error("Failed To fetch all users");
  }

  const dummyUsers = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "admin",
    },
    { id: 2, name: "Bob Smith", email: "bob.smith@example.com", role: "user" },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      role: "user",
    },
    {
      id: 4,
      name: "Diana Prince",
      email: "diana.prince@example.com",
      role: "admin",
    },
  ];

  return (
    <div>
      <Table>
        <TableCaption>A list of all users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <span
                  className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                    user.role === "admin"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {user.role}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllUsers;
