"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "./components/Form";

const EditPrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  // const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');

  const [prompt, setPrompt] = useState({
    prompt: '',
    tag: '',
  });

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();

      setPrompt({
        prompt: data.prompt,
        tag: data.tag,
      })
    }
    if (promptId) getPromptDetails();
  }, [promptId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (!promptId) return alert("No prompt ID");
    try {
      const response = await fetch(`/api/prompt/${promptId}`,
        {
          method: 'PATCH',
          body: JSON.stringify({
            prompt: prompt.prompt,
            tag: prompt.tag,
          }),
        });

      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
    finally {
      setSubmitting(false);
    }

  };

  return (
    <Form
      type="Edit"
      prompt={prompt}
      setPrompt={setPrompt}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  )
}

export default EditPrompt;