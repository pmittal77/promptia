"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ key, prompt, handleTagClick, handleEdit, handleDelete }) => {
  console.log(prompt.creator);
  const [copied, setCopied] = useState('');
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const handleCopyClick = () => {
    setCopied(prompt.prompt);
    navigator.clipboard.writeText(copied);
    setTimeout(() => setCopied(''), 3000);
  }

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={prompt.creator.image}
            alt="User Image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div flex flex-col>
            <h3 className="font-satoshi font-semibold text-gray-900">
              {prompt.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {prompt.creator._id}
            </p>
          </div>
          <div className="copy_btn" onClick={handleCopyClick}>
            <Image
              src={copied === prompt.prompt ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
              width={12}
              height={12}
            />
          </div>
        </div>
      </div>
      <div className="my-4 font-satoshi text-sm text-gray-700">
        {prompt.prompt}
      </div>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(prompt.tag)}
      >
        {prompt.tag}
      </p>
      {session?.user.id === prompt.creator._id &&
        pathName === '/profile' &&
        <div className="mt-4 flex-center gap-4 border-t border-gray-100 pt-3" >
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={() => handleEdit && handleEdit(prompt)}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={() => handleDelete && handleDelete(prompt)}
          >
            Delete</p>
        </div>
      }
    </div>
  )
}

export default PromptCard;