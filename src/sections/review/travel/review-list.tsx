import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { IReviewItemProp } from 'src/types/review';

import ReviewItem from './review-item';

// ----------------------------------------------------------------------

type Props = {
  reviews: IReviewItemProp[];
};

export default function ReviewList({ reviews }: Props) {
  return (
    <>
      {reviews.map((review) => {
        const { id, name, rating, helpful, message, created_at, avatar, replyComment, users } =
          review;

        const hasReply = !!replyComment.length;

        return (
          <Box key={id}>
            <ReviewItem
              name={name}
              avatar={avatar}
              created_at={created_at}
              message={message}
              rating={rating}
              helpful={helpful}
            />

            {hasReply &&
              replyComment.map((reply) => {
                const userReply = users.filter((user) => user.id === reply.userId)[0];

                return (
                  <ReviewItem
                    key={reply.id}
                    tagUser={reply.tagUser}
                    created_at={reply.created_at}
                    message={reply.message}
                    name={userReply.name}
                    avatar={userReply.avatar}
                    hasReply
                  />
                );
              })}
          </Box>
        );
      })}

      <Pagination
        count={10}
        color="primary"
        sx={{
          mt: 5,
          mb: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}
