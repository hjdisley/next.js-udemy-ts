import { useRouter } from 'next/router';

export default function BlogPageID() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>BLOGS PAGE</h1>
    </div>
  );
}
