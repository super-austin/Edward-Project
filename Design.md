# Design Documentation for `Lord of King` data explorer

## Requirement

### API integration

Should interact with `Lord of King` api endpoint to get Movie, Character, Quote information.

### Frontend/Backend

- On the frontend, should display the datas in appropriate way.
- On the frontend, should implement responsive design for mobile platform.
- On the backend, should implement api endpoints to fetch the data.

### Workflow

- This app content consists `Header` and `Content`.
  - Place a navbar for navigating to each page.
  - If user clicks Title(`Lord of King`), then the page should redirect to landing page.
- User can see the landing page.
  - On the landing page, user can navigate to each page.
- Movies Page.
  - Should display the contents with cards.
  - If user clicks the card, the user should able to see the items in details.
  - If the user inputs the keyword, the items should be filtered by `Name` of Movie.
  - No pagination needed. (Total number of movie: 8).
- Character Page.
  - Should display the contents with cards.
  - If user clicks the card, the user should able to see the items in details.
  - If the user inputs the keyword, the items should be filtered by `Name` of Character.
  - Should implement pagination.
- Quotes Page.
  - Should display the contents with list.
  - If user clicks `Movie info` or `Character Info`, the user should be able to see the details of Movie or Character.
  - If the user inputs the keyword, the items should be filtered by `Dialog` of Quote.
  - Should implement pagination.

## Frontend Component Design

### Common Component

- Modal Component.
  - This component is used for displaying the details about `Movie` and `Characters`.
  - There should be overlay under the dialog so if user clicks out of dialog, it should be closed.
  - If user clicks close button on the top-right corner of the dialog, it should be closed.
  - The dialog should be responsive.

### Hooks

Design `useMovie`, `useMovieWithId`, `useCharacters`, `useCharacterWithId`, `useQuotes` hooks to represent the status of fetching data.

- Should receive right parameters.
  - Receive `pageId`, `keyword` as parameter of `useMovie`, `useCharacters`, `useQuotes` hooks.
  - Receive `id` as a parameter of `useMovieWithId`, `useCharacterWithId` hooks.
- Should return values representing the status of data fetching.
  - response: Includes the actual data comes from the API.
  - isLoading: Should be `true` if the data is fetching from the API. In the other case, it should be `false`.
  - isError: Should be `true` if data fetching failed. In the other case, it should be `false`.

### Movies Pages

This page should display the all the Movies and Movie details.

- `Index` Page
  - Should display the all the list of Movies.
  - Should display the search bar to filter the Movie.
- `MovieCard` component
  - This card component is used for displaying some neccessary information about the movie.
  - If user clicks the card, it should open the `Modal` that contains the details of Movie.
- `MovieModalContent` component
  - This component should hold the details that should be displayed in the `Modal` component
- `MovieDetail` Page
  - This page is used for displaying the details of Movie.
  - This page is based on `Modal` component

### Characters Pages

This page should display the all the Character and Character details.

- `Index` Page
  - Should display the all the list of Characters.
  - Should display the search bar to filter the Characters.
- `CharacterCard` component
  - This card component is used for displaying some neccessary information about the Characters.
  - If user clicks the card, it should open the `Modal` that contains the details of Characters.
- `CharacterModalContent` component
  - This component should hold the details that should be displayed in the `Modal` component
- `CharacterDetail` Page
  - This page is used for displaying the details of Character.
  - This page is based on `Modal` component

### Quotes Pages

This page should display the Quotes information and redirects to `MovieDetail` and `CharacterDetail` pages..

- `Index` Page
  - Should display the all the list of Quotes.
  - Should display the search bar to filter the Quotes.
- `QuotesItem` component
  - This component is used for displaying some neccessary information about the Quotes.
  - If user clicks `Movie Info` and `Character Info`, the page should be redirected to `MovieDetail` or `Character Detail` Page.

## Future updates needed in this Home Task

- Should implement `SSR(Server Side Rendering)` to improved the performance.
- Should implement custom error pages to display errors and error details. (currently just static text)
- Should implement `Light`/`Dark` view.
- It's better to implement `Grid`/`List` view layout changes to improve the UX.
- It's better to implement detailed `filtering`/`sorting` functionality for each pages.
