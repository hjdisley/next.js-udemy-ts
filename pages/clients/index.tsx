import Link from 'next/link';

export default function ClientPage() {
  let clients: { id: string; name: string }[];

  clients = [
    { id: '1', name: 'Jeff' },
    { id: '2', name: 'John' },
  ];

  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li>
              <Link
                href={{
                  pathname: '/clients/[id]',
                  query: { id: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
