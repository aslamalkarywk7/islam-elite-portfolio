export function generateStaticParams() {
  return [
    { roomId: "general" },
    { roomId: "music" },
    { roomId: "gaming" },
    { roomId: "romance" },
    { roomId: "movies" },
    { roomId: "books" },
    { roomId: "coffee" },
    { roomId: "news" },
  ];
}

import ChatClient from "./ChatClient";

export default function Page({ params }: { params: Promise<{ roomId: string }> }) {
  return <ChatClient params={params} />;
}
