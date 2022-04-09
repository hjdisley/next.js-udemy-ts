import { useRouter } from 'next/router';

export default function PortfolioProject() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.locale);

  return (
    <div>
      <h1>List [id] Page</h1>
    </div>
  );
}
