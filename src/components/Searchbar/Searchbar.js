import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarHeader>
      <SearchForm
        onSubmit={e => {
          onSubmit(e);
        }}
      >
        <SearchFormButton type="submit">
          <SearchFormLabel className="button-label">Search</SearchFormLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          name="searchQuery"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};
