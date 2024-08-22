"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Profile from "./components/Profile";

const MyProfile = () => {
  const [prompts, setPrompts] = useState([]);
  const { data: session } = useSession();
  const router = useRouter();

  const handlePromptEdit = (prompt) => {
    console.log("Editing prompt")
    router.push(`/update-prompt?id=${prompt._id}`)

  }
  const handlePromptDelete = async (prompt) => {
    const hasConfirmed = confirm("Do you want to delete this prompt");
    if (!hasConfirmed) return;
    try {
      const response = await fetch(`/api/prompt/${prompt._id.toString()}`,
        {
          method: 'DELETE'
        }
      );
      console.log(response.body.toString());
      const filteredPrompts = prompts.filter((p) => p._id !== prompt._id);
      setPrompts(filteredPrompts);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/prompts`);
      if (response.ok) {
        const data = await response.json();
        setPrompts(data);
      }
    };
    console.log(`Fetching Prompts ${session}`);
    if (session?.user.id) fetchPrompts();
    // fetchPrompts();
  }, [session?.user.id]);

  return (
    <Profile
      name={session?.user.name}
      desc={session?.user.email}
      data={prompts}
      handlePromptEdit={handlePromptEdit}
      handlePromptDelete={handlePromptDelete}
    />
  )
}

export default MyProfile;