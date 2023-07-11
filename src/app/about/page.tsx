export const dynamic = "force-static";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "YourSpace About section",
    description: "we're a social media app"
}

export default function About() {
  return (
    <div>About</div>
  )
}
