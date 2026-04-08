export default async function Post({ params }) {
  const resolvedParams = await params;
  return (
    <div>
      <h1>Post :{resolvedParams.id}</h1>
      <p>Post content goes here...</p>
    </div>
  );
}
