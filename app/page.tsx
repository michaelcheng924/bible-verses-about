// "use client";

import { getVerseTopics } from "@/lib/verseTopic-db";

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

export default async function Home() {
  alphabet.forEach(async (letter) => {
    const res = await getVerseTopics(letter);
    console.log("=====", res);
  });

  return <div>HIHI</div>;
}
