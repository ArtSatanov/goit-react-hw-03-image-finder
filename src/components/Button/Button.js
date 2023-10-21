import { LoadMoreBtn } from './Button.styled';

export const Button = ({ OnClick }) => {
  return (
    <div>
      <LoadMoreBtn
        type="button"
        onClick={() => {
          OnClick();
        }}
      >
        Load More
      </LoadMoreBtn>
    </div>
  );
};
