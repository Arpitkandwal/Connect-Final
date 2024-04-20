"use client";

import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
    Channel,
    ChannelHeader,
    Chat,
    LoadingIndicator,
    MessageInput,
    MessageList,
    Thread,
    Window,
} from "stream-chat-react";
import "stream-chat-react/dist/css/index.css";

const apiKey = "3wxmnrvckkpd";

const user = {
  id: "john",
  name: "John",
  image: "https://getstream.imgix.net/images/random_svg/FS.png",
};

const App = () => {
  const [client, setClient] = useState<any>(null);
  const [channel, setChannel] = useState<any>(null);

  useEffect(() => {
    async function init() {
      const chatClient = StreamChat.getInstance(apiKey);

      await chatClient.connectUser(user, chatClient.devToken(user.id));

      const channel = chatClient.channel("messaging", "react-talk", {
        image: "/icons/msg-icons.svg",
        name: "ChatRoom",
        members: [user.id],
      });

      await channel.watch();

      setChannel(channel);
      setClient(chatClient);
    }

    init();

    return () => {
      if (client) client.disconnectUser();
    };
  }, [client]);

  if (!channel || !client) return <LoadingIndicator />;

  return (
    <Chat client={client} theme="messaging dark">
      <Channel channel={channel}>
        <Window>
          <ChannelHeader title="Chat App" image="/icons/msg-icons.svg"/>
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>    
    </Chat>
  );
};

export default App;