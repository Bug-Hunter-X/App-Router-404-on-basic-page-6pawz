```javascript
// pages/index.js

export default function Home() {
  return (
    <div>Hello, world!</div>
  );
}
```
This code will work fine in Next.js 13 and below.  However, in Next.js 15 with the App Router, this will result in a 404 error.