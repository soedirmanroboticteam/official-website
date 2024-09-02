import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error",
  description: "Error page",
};

export default function ErrorPage() {
  return <p>Sorry, something went wrong</p>;
}
