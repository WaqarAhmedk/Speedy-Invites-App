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
    title: 'Birthday',
    totalCards: '1300',
    images: [cardimg, imgleft],
    colors: ['#c9ffbf', '#ffafbd'],
  },
  {
    title: 'Wedding',
    totalCards: '900',
    images: [cardimg, imgleft],
    colors: ['#b993d6', '#8ca6db'],
  },
  {
    title: 'Baby Shower',
    totalCards: '500',
    images: [cardimg, imgleft],
    colors: ['#00d2ff', '#3a7bd5'],
  },
  {
    title: 'Graduation',
    totalCards: '750',
    images: [cardimg, imgleft],
    colors: ['#d3959b', '#bfe6ba'],
  },
  {
    title: 'Anniversary',
    totalCards: '1100',
    images: [cardimg, imgleft],
    colors: ['#00d2ff', '#d3959b'],
  },
  {
    title: 'Retirement',
    totalCards: '400',
    images: [cardimg, imgleft],
  },
  {
    title: 'Engagement',
    totalCards: '600',
    images: [cardimg, imgleft],
  },
  {
    title: 'Holiday Party',
    totalCards: '800',
    images: [cardimg, imgleft],
  },
  {
    title: 'Housewarming',
    totalCards: '300',
    images: [cardimg, imgleft],
  },
  {
    title: 'Bridal Shower',
    totalCards: '700',
    images: [cardimg, imgleft],
  },
  {
    title: 'Dinner Party',
    totalCards: '550',
    images: [cardimg, imgleft],
  },
  {
    title: 'Graduation',
    totalCards: '900',
    images: [cardimg, imgleft],
  },
  {
    title: 'Farewell',
    totalCards: '350',
    images: [cardimg, imgleft],
  },
  {
    title: 'Surprise Party',
    totalCards: '600',
    images: [cardimg, imgleft],
  },
  {
    title: 'Thanksgiving',
    totalCards: '450',
    images: [cardimg, imgleft],
  },
];

const user = {
  name: 'Waqar AHmed',
  email: 'waqar@gmail.com',
  avatar: avatar,
};

module.exports = {AppColors, premiumFeatures, invitationCategories, user};
