import {Client, Server} from 'nexus-flux/src/adapters/Local';

class LocalClient {
	static setup(server) {
		if (!LocalClient.ServerInstance) {
			LocalClient.ServerInstance = server;
		} else if (server) {
			throw new Error('You cannot instantiate the local client with a server twice');
		}
	}

	static instance() {
		if (LocalClient) {
			return new Client(LocalClient.ServerInstance);
		}
		else {
			throw new Error('You cannot get an instance before initializing');
		}
	}
}

class LocalServer {
	constructor(stores) {
		if (!LocalServer.instance) {
			LocalServer.instance = new Server(stores);
		}
		else if (stores) {
			throw new Error('You cannot create a LocalServer twice');
		}
	}

	get instance() {
		return LocalServer.instance;
	}
}

export default {LocalClient, LocalServer};
