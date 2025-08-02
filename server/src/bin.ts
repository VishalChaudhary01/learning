import { app } from ".";
import { connectDB } from "./db";

app.listen(3000, async () => {
  console.log("Server running");
  await connectDB();
});
