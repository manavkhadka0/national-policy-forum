// ----------------------------------------------------------------------

type IReviewUsers = {
  id: string;
  name: string;
  avatar: string;
};

type IReviewReplyComment = {
  id: string;
  userId: string;
  message: string;
  created_at: Date;
  tagUser?: string;
};

export type IReviewItemProp = {
  id: string;
  name: string;
  rating: number;
  created_at: Date;
  message: string;
  helpful: number;
  avatar: string;
  users: IReviewUsers[];
  replyComment: IReviewReplyComment[];
};
