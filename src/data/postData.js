// import all image here
import user1 from '../assets/userTeam1.jpg';
import user2 from '../assets/userTeam2.jpg';
import user3 from '../assets/userTeam3.jpg';
import imageA1 from '../assets/a1.jpg';
import imageA2 from '../assets/a2.jpg';
import imageA3 from '../assets/a3.jpg';
import imageA4 from '../assets/a4.jpg';
import imageA5 from '../assets/a5.jpg';
import imageA6 from '../assets/a6.jpg';
import imageA7 from '../assets/a7.jpg';
import imageA8 from '../assets/a8.jpg';

export const postsData = [
  // Post 1: 1 Image
  {
    id: 1,
    user: {
      profileImage: user1,
      name: 'Alex Rivera',
      userName: '@alex_rivera',
    },
    post: {
      headline: 'Germany: The Heart of European Innovation and Heritage',
      content:
        "As Europe's largest economy, Germany seamlessly bridges its rich historical heritage with pioneering modern technology. Renowned worldwide for its engineering excellence, vibrant cultural hubs like Berlin and Munich, and a strong commitment to sustainability.",
      images: [imageA5],
      love: 120,
      comments: [
        {
          id: 101,
          profileImage: user2,
          name: 'Sarah Chen',
          text: 'Absolutely brilliant analysis! Germany is truly beautiful.',
        },
        {
          id: 102,
          profileImage: user3,
          name: 'David Miller',
          text: 'Berlin is on top of my travel bucket list this year.',
        },
        {
          id: 103,
          profileImage: user3,
          name: 'David Miller',
          text: 'Berlin is on top of my travel bucket list this year.',
        },
      ],
    },
  },


  // Post 2: 2 Images
  {
    id: 2,
    user: {
      profileImage: user2,
      name: 'Sarah Chen',
      userName: '@sarah_chen',
    },
    post: {
      headline: 'Exploring Minimalist Architecture',
      content:
        'Clean lines, neutral colors, and functional designs. Loving how modern structures blend with urban environments these days.',
      images: [imageA1, imageA2],
      love: 85,
      comments: [
        {
          id: 201,
          profileImage: user1,
          name: 'Alex Rivera',
          text: 'These structures look incredibly peaceful.',
        },
      ],
    },
  },


  // Post 3: 4 Images
  {
    id: 3,
    user: {
      profileImage: user3,
      name: 'David Miller',
      userName: '@david_m',
    },
    post: {
      headline: 'Weekend Photography Dump 📸',
      content:
        'Captured some amazing abstract perspectives around the city today. Nature and geometry working together perfectly.',
      images: [imageA3, imageA4, imageA6, imageA7],
      love: 240,
      comments: [
        {
          id: 301,
          profileImage: user2,
          name: 'Sarah Chen',
          text: 'Wow, the 3rd picture is absolutely stunning!',
        },
        {
          id: 302,
          profileImage: user1,
          name: 'Alex Rivera',
          text: 'Incredible angles, David. Teach me your ways!',
        },
      ],
    },
  },


  // Post 4: 1 Image
  {
    id: 4,
    user: {
      profileImage: user1,
      name: 'Alex Rivera',
      userName: '@alex_rivera',
    },
    post: {
      headline: 'Morning Coffee & Tech setup',
      content:
        "Starting the week with a fresh brew and some intense coding sessions. Let's build something amazing today!",
      images: [imageA8],
      love: 95,
      comments: [
        {
          id: 401,
          profileImage: user3,
          name: 'David Miller',
          text: 'Keep grinding, mate!',
        },
      ],
    },
  },


  // Post 5: 3 Images
  {
    id: 5,
    user: {
      profileImage: user2,
      name: 'Sarah Chen',
      userName: '@sarah_chen',
    },
    post: {
      headline: 'Chasing the Perfect Sunset',
      content:
        'Took a small break from screen time to look at the sky. Best decision I made all week.',
      images: [imageA2, imageA4, imageA5],
      love: 150,
      comments: [
        {
          id: 501,
          profileImage: user1,
          name: 'Alex Rivera',
          text: 'We all need that break sometimes. Lovely colors!',
        },
        {
          id: 502,
          profileImage: user3,
          name: 'David Miller',
          text: 'Spectacular views.',
        },
      ],
    },
  },


  // Post 6: 5 Images
  {
    id: 6,
    user: {
      profileImage: user3,
      name: 'David Miller',
      userName: '@david_m',
    },
    post: {
      headline: 'Portfolio Project Showcase',
      content:
        'Finishing up the core assets for my upcoming frontend template. Here is a little sneak peek of the moodboard!',
      images: [imageA1, imageA3, imageA5, imageA7, imageA8],
      love: 310,
      comments: [
        {
          id: 601,
          profileImage: user2,
          name: 'Sarah Chen',
          text: "Can't wait to see the live version! This looks high quality.",
        },
      ],
    },
  },
  // Post 7: 1 Image
  {
    id: 7,
    user: {
      profileImage: user1,
      name: 'Alex Rivera',
      userName: '@alex_rivera',
    },
    post: {
      headline: 'The Rise of Smart Cities',
      content:
        'How IoT and responsive design are shaping the futuristic cities we live in. Infrastructure is evolving fast.',
      images: [imageA6],
      love: 64,
      comments: [
        {
          id: 701,
          profileImage: user3,
          name: 'David Miller',
          text: 'Interesting read, thanks for sharing.',
        },
      ],
    },
  },


  // Post 8: 2 Images
  {
    id: 8,
    user: {
      profileImage: user2,
      name: 'Sarah Chen',
      userName: '@sarah_chen',
    },
    post: {
      headline: 'Retro vs Modern Design Trends',
      content:
        'Which side are you on? Minimalistic modern looks or vibrant retro aesthetic elements?',
      images: [imageA1, imageA7],
      love: 180,
      comments: [
        {
          id: 801,
          profileImage: user1,
          name: 'Alex Rivera',
          text: 'Definitely team Minimalist for UI, but Retro for graphics!',
        },
      ],
    },
  },


  // Post 9: 4 Images
  {
    id: 9,
    user: {
      profileImage: user3,
      name: 'David Miller',
      userName: '@david_m',
    },
    post: {
      headline: 'Macro Photography Experiments',
      content:
        "Getting close up with textures and everyday elements. It's crazy how much detail we miss every day.",
      images: [imageA2, imageA3, imageA6, imageA8],
      love: 195,
      comments: [
        {
          id: 901,
          profileImage: user2,
          name: 'Sarah Chen',
          text: 'The depth of field in these is incredible.',
        },
      ],
    },
  },


  // Post 10: 1 Image
  {
    id: 10,
    user: {
      profileImage: user2,
      name: 'Sarah Chen',
      userName: '@sarah_chen',
    },
    post: {
      headline: 'Final Polish on UI Overhaul',
      content:
        'Just updated the card layout for the main feed. Responsiveness looks super clean on both mobile and desktop screens.',
      images: [imageA3],
      love: 220,
      comments: [
        {
          id: 1001,
          profileImage: user1,
          name: 'Alex Rivera',
          text: 'Great job on the CSS grid/flexbox optimization.',
        },
        {
          id: 1002,
          profileImage: user3,
          name: 'David Miller',
          text: 'Smooth layout!',
        },
      ],
    },
  },
];
