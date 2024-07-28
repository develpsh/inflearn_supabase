"use client";

import { useEffect, useState } from "react"
import { searchUsers } from "../actions/user-actions"

export default function UsersPage() {
  const [users, setUsers ] = useState([])

    useEffect(() => {
      searchUsers("Alice").then((data) => setUsers(data));
      // fetch(`/api/users?name=${"Alice"}`)
      // .then(res => res.json())
      // .then(data => {
      //   setUsers(data.users);
      // });
    }, [])

  return <main>
    <h1>Users</h1>

    {users.map((user) =>(
      <p key={user.id}>{user.name}</p>
    ))}
  </main>
}