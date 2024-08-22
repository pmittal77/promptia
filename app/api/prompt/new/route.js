import connectToDb from './utils/database';
import Prompt from './models/prompt';

export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectToDb();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });

    console.log(newPrompt.creator);
    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response('Prompt not saved', { status: 500 });
  }
}