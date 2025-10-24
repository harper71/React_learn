import axios from "axios";
import fs from "fs";
import MemeData from "./MemesApi.js";
async function ApiFetch() {
  try {
    const url = "https://api.imgflip.com/get_memes";
    const response = await axios.get(url);
    const data = response.data;

    // Log just to confirm structure
    console.log(data);

    // Convert to JSON string
    const jsonString = JSON.stringify(data.data.memes, null, 2);

    // Write to file
    fs.writeFileSync(
      "MemesApi.js",
      `const MemeData = [${jsonString}];\n\nexport default MemeData;`
    );

    console.log("✅ Meme data saved successfully!");
  } catch (error) {
    console.error("❌ Error fetching meme data:", error.message);
  }
}




