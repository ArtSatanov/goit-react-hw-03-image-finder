export const Button = ({ OnClick }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          OnClick();
        }}
      >
        Load More
      </button>
    </div>
  );
};
