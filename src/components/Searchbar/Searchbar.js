import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarHeader>
      <SearchForm
        onSubmit={e => {
          onSubmit(e);
        }}
      >
        <SearchFormButton type="submit">
          <ImSearch />
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
