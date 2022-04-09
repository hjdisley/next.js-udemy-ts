import { useRouter } from 'next/router';

export default function ClientProjects() {
  const router = useRouter();

  function loadProject() {
    return router.push({
      pathname: 'clients/[id]/[clientprojectid]',
      query: {
        id: '1',
        clientprojectid: 'project(A)',
      },
    });
  }

  return (
    <div>
      <h1>Client Projects Page</h1>
      <button onClick={loadProject}>Load Project (A)</button>
    </div>
  );
}
