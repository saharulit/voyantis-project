// data.ts
export interface Friend {
  name: string;
  caricature: string;
  quote: string;
}

export const friends: Friend[] = [
  {
    name: 'Joey Tribbiani',
    caricature: 'Charming and a little clueless, but lovable.',
    quote: "How you doin'?",
  },
  {
    name: 'Rachel Green',
    caricature: 'Fashionable and determined, always striving for her dreams.',
    quote: "Just so you know, it's NOT that common, it doesn't happen to every guy and it IS A BIG DEAL!",
  },
  {
    name: 'Ross Geller',
    caricature: 'Intelligent paleontologist with a complicated love life.',
    quote: 'We were on a break!',
  },
  {
    name: 'Monica Geller',
    caricature: 'Competitive chef with a strong desire for cleanliness and order.',
    quote: 'Welcome to the real world! It sucks. You’re gonna love it!',
  },
  {
    name: 'Chandler Bing',
    caricature: 'Sarcastic and funny, with a knack for self-deprecating humor.',
    quote: 'Could I be any more...?',
  },
  {
    name: 'Phoebe Buffay',
    caricature: 'Quirky and eccentric musician with a mysterious past.',
    quote: "I wish I could, but I don't want to",
  },
];
