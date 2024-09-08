export const temp: Review[] = [
  {
    name: 'Isabel Peña Roja',
    reviewId: '213213321dkfksmwe',
    reviewer: {
      profilePhotoUrl:
        'https://img.rl0.ru/afisha/e780x-i/daily.afisha.ru/uploads/images/7/13/713e9e0f698a85e2a567f7b4b771390f.png',
      displayName: 'Isabel Peña Roja',
      isAnonymous: false,
    },
    starRating: StarRating.FOUR,
    comment:
      'Excelente especialista, ayudó a resolver el problema y brindó valiosos consejos.',
    createTime: '2014-10-02T15:01:23.045123456Z',
    updateTime: '2014-10-02T15:01:23Z',
  },
  {
    name: 'Isabel Peña Roja',
    reviewId: '213213321dkfksmwe',
    reviewer: {
      profilePhotoUrl:
        'https://img.rl0.ru/afisha/e780x-i/daily.afisha.ru/uploads/images/7/13/713e9e0f698a85e2a567f7b4b771390f.png',
      displayName: 'Isabel Peña Roja',
      isAnonymous: false,
    },
    starRating: StarRating.FOUR,
    comment:
      'Excelente especialista, ayudó a resolver el problema y brindó valiosos consejos.',
    createTime: '2014-10-02T15:01:23.045123456Z',
    updateTime: '2014-10-02T15:01:23Z',
  },
  {
    name: 'Isabel Peña Roja',
    reviewId: '213213321dkfksmwe',
    reviewer: {
      profilePhotoUrl:
        'https://img.rl0.ru/afisha/e780x-i/daily.afisha.ru/uploads/images/7/13/713e9e0f698a85e2a567f7b4b771390f.png',
      displayName: 'Isabel Peña Roja',
      isAnonymous: false,
    },
    starRating: StarRating.FIVE,
    comment:
      'Excelente especialista, ayudó a resolver el problema y brindó valiosos consejos.',
    createTime: '2014-10-02T15:01:23.045123456Z',
    updateTime: '2014-10-02T15:01:23Z',
  },
];

export type Review = {
  name: string;
  reviewId: string;
  reviewer: Reviewer;
  starRating: StarRating;
  comment: string;
  createTime: string;
  updateTime: string;
};

export enum StarRating {
  STAR_RATING_UNSPECIFIED,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
}

type Reviewer = {
  profilePhotoUrl: string;
  displayName: string;
  isAnonymous: boolean;
};
