## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

## Runing the tests

```bash
npm test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

-   Currently, the data is coming from a locally hosted API (http://localhost:3000/api/results) instead of the original URL, since the images were not working correctly so they were manually changed.
-   To be able to run the app with the original API, go to the file `pages/index.tsx`, uncomment line 45 and comment 46.
