import React from 'react'
import { StreamChat } from 'stream-chat';
import { ChannelListContext, Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer } from './components'

import './App.css';

const {
  API_KEY: apiKey,
} = process.env;

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer

        />
        <ChannelContainer

        />
      </Chat>
    </div>
  )
}

export default App