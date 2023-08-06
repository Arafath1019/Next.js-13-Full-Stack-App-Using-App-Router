## Getting Started

First, clone the repository and install dependencies:
```bash
npm install
```

Secondly, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Fetching Data ON CLIENT SIDE
1. Fetch in useEffect
2. Use a fetching library
    - React Query
    - SWR

## Fetching Data ON SERVER SIDE
1. create page as async function, then directly fetch data on the page
Caching data while fetching on SERVER SIDE:
1. If data never changes, then use static caching
await fetch("url", {
    cache: 'force-cache'
})
2. If data changes, but not too often, then revalidate data after a certain time on seconds
await fetch('url',{
    next: { revalidate: 10 }
})
3. If data changes all the time, use dynamic fetching
await fetch("url", {
    cache: 'no-store'
})

# Example code:
```
async function getData() {
    const res = await fetch("url", {
        cache: 'no-store'
    });
    return res.json();
}

const Page = async () => {
    const data = await getData();

    return <main></main>;
};

export default Page;
```