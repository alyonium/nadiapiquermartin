import annaPhoto from '/public/anna.webp';
import arividerchiPhoto from '/public/arividerchi.webp';
import victoriaPhoto from '/public/victoria.webp';

export enum StarRating {
  STAR_RATING_UNSPECIFIED,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
}

export type ReviewType = {
  reviewLink: string;
  profilePhoto: unknown;
  name: string;
  starRating: StarRating;
  comment: string;
  createTime: string;
};

export const data: ReviewType[] = [
  {
    reviewLink: 'https://maps.app.goo.gl/q4CjrNMbtcTxfZmD7',
    profilePhoto: victoriaPhoto,
    name: 'Вікторія Пилипів',
    starRating: StarRating.FIVE,
    comment: 'victoriaReview',
    createTime: '2024-10-20T15:01:23.045123456Z',
  },
  {
    reviewLink: 'https://maps.app.goo.gl/x2Ce1WunfPwefGyY8',
    profilePhoto: annaPhoto,
    name: 'Anna Shur',
    starRating: StarRating.FIVE,
    comment: 'annaReview',
    createTime: '2024-10-09T15:01:23.045123456Z',
  },
  {
    reviewLink: 'https://maps.app.goo.gl/yVqc4Uy3vydQx2xV6',
    profilePhoto: arividerchiPhoto,
    name: 'Arividerchi 12',
    starRating: StarRating.FIVE,
    comment: 'arividerchiReview',
    createTime: '2024-10-09T15:01:23.045123456Z',
  },
];
