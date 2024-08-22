import Link from 'next/link';

const Form = ({ type, prompt, setPrompt, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>
          {type} Prompt
        </span>
      </h1>
      <p className='desc text-left max-w-md'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, illum labore dignissimos fugiat quia beatae, doloremque, laborum sint aliquid quibusdam facere. Amet eveniet autem dolor voluptas molestias nisi fugit laboriosam?
      </p>
      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-grey-700'>
            Your AI-prompt
          </span>
          <textarea
            value={prompt.prompt}
            onChange={(e) => setPrompt({ ...prompt, prompt: e.target.value })}
            placeholder='Write your prompt here'
            required
            className='form_textarea'
          >

          </textarea>
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-grey-700'>
            Tag{' '}
            <span className='font-normal'>
              (#webdev #ai)
            </span>
          </span>
          <input
            value={prompt.tag}
            onChange={(e) => setPrompt({ ...prompt, tag: e.target.value })}
            placeholder='#tag'
            className='form_input'
          >

          </input>
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>
          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 rounded-full bg-primary-orange text-white'
          >
            {submitting ? `${type}... ` : type}
          </button>
        </div>
      </form>
    </section >
  );
}

export default Form;