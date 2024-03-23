const {card2} = require('../assets/images');
const {ring} = require('../assets/images');
const {cake} = require('../assets/images');
const {card1} = require('../assets/images');
const {imgleft, avatar, cardimg} = require('../assets/images');

const AppColors = {
  mainBackgroundColor: '#7E3CA6',
  white: '#ffff',
};

const premiumFeatures = [
  'Unlock Over Thousands of Designs',
  'Ad Free Experience',
  'No Restrictions ',
];

const invitationCategories = [
  {
    id: 1,
    title: 'Birthday',
    totalCards: '1300',
    image: cake,
    color: '#FFD700', // Gold
  },
  {
    id: 2,
    title: 'Wedding',
    image: ring,
    totalCards: '900',
    images: [cardimg, imgleft],
    color: '#D3D3D3', // White
  },
  {
    id: 3,
    title: 'Baby Shower',
    totalCards: '500',
    image: cake,
    color: '#87CEEB', // Sky Blue
  },
  {
    id: 4,
    title: 'Graduation',
    totalCards: '750',
    image: cake,
    color: '#2E8B57', // Sea Green
  },
  {
    id: 5,
    title: 'Anniversary',
    totalCards: '1100',
    image: cake,
    color: '#FF69B4', // Hot Pink
  },
  {
    id: 6,
    title: 'Retirement',
    totalCards: '400',
    image: cake,
    color: '#F08080', // Light Coral
  },
  {
    id: 7,
    title: 'Engagement',
    totalCards: '600',
    image: cake,
    color: '#FFA07A', // Light Salmon
  },
  {
    id: 8,
    title: 'Holiday Party',
    totalCards: '800',
    image: cake,
    color: '#008080', // Teal
  },
  {
    id: 9,
    title: 'Housewarming',
    totalCards: '300',
    image: cake,
    color: '#FF6347', // Tomato
  },
  {
    id: 10,
    title: 'Bridal Shower',
    totalCards: '700',
    image: cake,
    color: '#BA55D3', // Medium Orchid
  },
  {
    id: 11,
    title: 'Dinner Party',
    totalCards: '550',
    image: cake,
    color: '#4682B4', // Steel Blue
  },
  {
    id: 12,
    title: 'Farewell',
    totalCards: '350',
    image: cake,
    color: '#800000', // Maroon
  },
  {
    id: 13,
    title: 'Surprise Party',
    totalCards: '600',
    image: cake,
    color: '#4B0082', // Indigo
  },
  {
    id: 14,
    title: 'Thanksgiving',
    totalCards: '450',
    image: cake,
    color: '#FFD700', // Gold
  },
];

const cards = [
  {id: 1, catId: 3, name: 'Design 1', imgUrl: card1},
  {id: 3, catId: 5, name: 'Design 3', imgUrl: card1},
  {id: 4, catId: 11, name: 'Design 4', imgUrl: card2},
  {id: 5, catId: 2, name: 'Design 5', imgUrl: card1},
  {id: 6, catId: 14, name: 'Design 6', imgUrl: card2},
  {id: 2, catId: 9, name: 'Design 2', imgUrl: card2},
  {id: 7, catId: 8, name: 'Design 7', imgUrl: card1},
  {id: 8, catId: 6, name: 'Design 8', imgUrl: card2},
  {id: 10, catId: 7, name: 'Design 10', imgUrl: card2},
  {id: 11, catId: 4, name: 'Design 11', imgUrl: card1},
  {id: 12, catId: 1, name: 'Design 12', imgUrl: card2},
  {id: 13, catId: 13, name: 'Design 13', imgUrl: card1},
  {id: 14, catId: 2, name: 'Design 14', imgUrl: card2},
  {id: 15, catId: 3, name: 'Design 15', imgUrl: card1},
  {id: 1, catId: 3, name: 'Design 1', imgUrl: card1},
  {id: 3, catId: 5, name: 'Design 3', imgUrl: card1},
  {id: 4, catId: 11, name: 'Design 4', imgUrl: card2},
  {id: 5, catId: 2, name: 'Design 5', imgUrl: card1},
  {id: 6, catId: 14, name: 'Design 6', imgUrl: card2},
  {id: 2, catId: 9, name: 'Design 2', imgUrl: card2},
  {id: 7, catId: 8, name: 'Design 7', imgUrl: card1},
  {id: 8, catId: 6, name: 'Design 8', imgUrl: card2},
  {id: 10, catId: 7, name: 'Design 10', imgUrl: card2},
  {id: 11, catId: 4, name: 'Design 11', imgUrl: card1},
  {id: 12, catId: 1, name: 'Design 12', imgUrl: card2},
  {id: 13, catId: 13, name: 'Design 13', imgUrl: card1},
  {id: 14, catId: 2, name: 'Design 14', imgUrl: card2},
  {id: 15, catId: 3, name: 'Design 15', imgUrl: card1},
];

// Assuming `cardimg` and `imgleft` are defined elsewhere in your code

const user = {
  name: 'Waqar AHmed',
  email: 'waqar@gmail.com',
  avatar: avatar,
};

module.exports = {
  AppColors,
  premiumFeatures,
  invitationCategories,
  user,
  cards,
};
