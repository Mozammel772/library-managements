import mongoose from "mongoose";
import app from "./app";

const port = process.env.PORT || 5000;
const MONGODB_URI =
  "mongodb+srv://Construction-Projects:dcw48n9B0WuIIFwp@construction-projects.z7ox4nb.mongodb.net/assignment4?retryWrites=true&w=majority&appName=Construction-Projects";

async function main() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Database connected");

    app.listen(port, () => {
      console.log(`🚀 Server is running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to DB", err);
  }
}

main();
