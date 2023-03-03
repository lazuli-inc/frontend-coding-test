import { Table } from "../../mocks/handlers";

async function getTables(): Promise<Table[]> {
  const response = await fetch("http://example.com/api/tables");
  return response.json();
}

export default async function Home() {
  const tables = await getTables();

  return (
    <div>
      <h1>Tables</h1>
      <ul>
        {tables.map((table) => {
          return (
          <li key={table.id} className="flex items-center space-x-4">
            <h2>{table.title}</h2>
            <p>{table.status}</p>
          </li>
          )
        })
      }
      </ul>
    </div>
  );
}
