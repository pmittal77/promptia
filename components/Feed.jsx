"use client";

import { useEffect, useState } from "react";
import PromptCard from "@components/PromptCard";

const PromptCardList = ({ data }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((prompt) => (
        <PromptCard
          key={prompt._id}
          prompt={prompt}
        />
      ))}
    </div>
  );
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [prompts, setPrompts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    console.log(e.target.value);
    // fetchPrompts();
  };

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch('/api/prompt');
      // {
      //   method: 'GET',
      //   body: JSON.stringify({
      //     searchText: searchText,
      //   }),
      // }
      // );
      console.log("Fetching Prompts");
      if (response.ok) {
        const data = await response.json();
        setPrompts(data);
      }
    };
    fetchPrompts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search prompt, tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        >
        </input>
      </form>
      <PromptCardList
        data={prompts}
      />
    </section>
  );
}

export default Feed;