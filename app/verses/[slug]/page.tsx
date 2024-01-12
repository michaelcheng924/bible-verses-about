export default async function VersePage({ params }: any) {
  const slug = params.slug;

  const data = await fetch(`http://localhost:3007/verses-json/${slug}.json`);
  const json = await data.json();

  const verses = json.verses;

  return (
    <div>
      {verses.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              marginBottom: 20,
            }}
          >
            <div>{item.votes}</div>
            <div>{item.esv}</div>
          </div>
        );
      })}
    </div>
  );
}
