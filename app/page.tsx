import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home◀️",
};
// Incremental Static Regeneration (ISR)
async function getData() {
  const res = await fetch(
    "https://6555cdbd84b36e3a431e5f1b.mockapi.io/api/v1/tasks",
    { next: { revalidate: 10 } }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface Props {
  id: string;
  title: string;
  completed: true;
}

const Home = async () => {
  const data = await getData();
  return (
    <section className="flex-start flex-col paddings mb-16">
      <h1 className="text-4xl font-bold mb-4">Home</h1>
      <h1>Post</h1>
      {data.map((item: Props) => (
        <div className="card w-96 bg-base-100 shadow-xl" key={item.id}>
          <div className="card-body">
            <h2 className="card-title">
              {/* <div className="badge badge-secondary">{item.completed}</div> */}
              {item.completed && <button className="btn">😯</button>}
            </h2>
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Home;
