import { VerseTopic } from "@/models/VerseTopic";
import connectDB from "./connect-db";
import fs from "fs";
import path from "path";

export async function getVerseTopics(/* letter: any */) {
  try {
    await connectDB();

    // const regex = new RegExp(`^${letter}`, "i"); // case insensitive search

    const verseTopics = await VerseTopic.find(/* { name: regex } */).exec();

    const cleanedVerseTopics = verseTopics.map(({ name, slug }) => ({
      slug,
      name,
    }));

    fs.writeFileSync(
      path.join(__dirname, `../../../public/slugs-name.json`),
      JSON.stringify(cleanedVerseTopics, null, 2)
    );

    return {
      verseTopic: cleanedVerseTopics,
    };
  } catch (error) {
    return { error };
  }
}
