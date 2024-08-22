import connectToDB from '../../../utils/database';
import Prompt from '../../../models/prompt';

export const GET = async (req) => {
  // const { searchText } = await req.json();
  console.log("Search Paramaters", req.nextUrl.searchParams.get('search_text'));
  const searchQuery = req.nextUrl.searchParams.get('search_text');
  try {
    await connectToDB();
    const prompts = await Prompt.find({
      tag: req.nextUrl.searchParams.get('search_text')
    }).populate('creator');
    console.log({ prompts });
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch prompts', { status: 500 });
  }
}