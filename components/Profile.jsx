import PromptCard from "@components/PromptCard";

const Profile = ({ name, desc, data, handlePromptEdit, handlePromptDelete }) => {
  console.log({ data });
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">
          {name} Profile
        </span>
      </h1>
      <p className="desc text-left">
        {desc}
      </p>
      <div className="mt-16 prompt_layout">
        {data.map((prompt) => (
          <PromptCard
            key={prompt._id}
            prompt={prompt}
            handleEdit={() => handlePromptEdit && handlePromptEdit(prompt)}
            handleDelete={() => handlePromptDelete && handlePromptDelete(prompt)}
          />
        ))}
      </div>
    </section>
  );
}

export default Profile;
