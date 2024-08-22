import connectToDB from './utils/database';
import Prompt from './models/prompt';

export const GET = async (req, { params }) => {
  // const { searchText } = await req.json();

  try {
    await connectToDB();
    const prompts = await Prompt.find({ creator: params.id }).populate('creator');
    console.log({ prompts });
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch prompts', { status: 500 });
  }
}