import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio Page</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
}
