
import './App.css';
import { ApolloClient, InMemoryCache,ApolloProvider } from '@apollo/client';
import MissionContainer from './components/Mission/index'
import { requestPermission } from "./setnotification";

// add the client

const client = new ApolloClient({
  uri: 'https://spacexdata.herokuapp.com/graphql', // link of deployed server
  cache: new InMemoryCache()
});


function App() {

  requestPermission();
  return (
    <ApolloProvider client={client}>
    <div>
      <MissionContainer />
    </div>
    </ApolloProvider>
  );
}

export default App;
