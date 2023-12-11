import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

async function getData({ params }: { params: { postId: string } }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: { params: { postId: string } }) {
  const data = await getData({ params });
  return (
    <>
      <div>My Post: {params.postId} 🐲</div>
      <Card className="w-5/12">
        <CardHeader>
          <CardTitle>{data.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{data.body}</p>
        </CardContent>
      </Card>
    </>
  );
}
