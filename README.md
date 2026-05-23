# Practice Challenge: Toy Tales

## Overview

Toy Tales is a React CRUD application that helps Andy organize his toys. The app connects to a local JSON backend and implements full CRUD functionality: viewing all toys, adding new toys, liking toys, and donating (deleting) toys.

## Setup

Run `npm install` to install dependencies.

Then run `npm run server` to start `json-server` on `http://localhost:6001`.

In another tab, run `npm run dev` to start the React app at `http://localhost:5173`.

In another tab, run `npm run test` to run the test suite.

## Deliverables

- **View all toys** — On page load, a GET request is made to `/toys` and all toys are displayed as `ToyCard` components.

- **Add a new toy** — When the `ToyForm` is submitted, a POST request is made to `/toys` with the new toy data (name, image, likes: 0). The new toy is added to the page without a refresh.

- **Like a toy** — When the like button is clicked, a PATCH request is made to `/toys/:id` with the updated likes count. The like count updates on the page and persists to the backend.

- **Donate a toy** — When the `Donate to GoodWill` button is clicked, a DELETE request is made to `/toys/:id`. The toy is removed from the backend and from the page.

## Screenshot

![App Screenshot](./screenshot.png)

## Best Practices
- `useEffect` used for initial data fetching on component mount.
- All state managed in `App` and passed down via props.
- Event handlers defined in `App` and passed to child components.
- No unnecessary console logs or commented-out code.

## Submission
Once all tests pass and code is pushed to GitHub, submit the repo through Canvas using CodeGrade.