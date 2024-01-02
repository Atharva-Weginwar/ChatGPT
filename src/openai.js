const {Configuration, OpenAIApi} = require('openai');
const apikey = "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"
const configuration = new Configuration({apikey: `${apikey}`});
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message){
  const res = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: message,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0 
  },{
    headers: {
      'Authorization': `Bearer ${apikey}`
    },
  });
  return res?.data?.choices[0]?.text;
}