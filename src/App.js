import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import Client from './core/helpers/client';
import Routes from './Routes';

const App = () => {
	return (
		<ApolloProvider client={Client}>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</ApolloProvider>
	);
};

export default App;
