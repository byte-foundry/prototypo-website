import {LocalClient, LocalServer} from '../assets/js/stores/local-client-server.stores.jsx';
import Remutable from 'remutable';

before(function() {

	const stores = {};
	const localServer = new LocalServer(stores).instance;
	LocalClient.setup(localServer);

	const plans = stores['/plans'] = new Remutable({
		monthly: {
			launch: {
				amount: 8,
				realAmount: 15,
				total: 8,
				realTotal: 15,
				recurrence: 'month',
			},
		},
		annual: {
			launch: {
				amount: 8,
				realAmount: 12,
				total: 96,
				realTotal: 144,
				recurrence: 'year',
			}
		}
	});

	const plansInfos = stores['/plansInfos'] = new Remutable({
		'personal_annual_USD_taxfree': {
			name: 'Prototypo professional annual subscription',
			recurrence: 'year',
			realAmount: '$96.00',
			discount: -4800,
		},
		'personal_annual_EUR_taxfree': {
			name: 'Prototypo professional annual subscription',
			recurrence: 'year',
			realAmount: '96.00€',
			discount: -4800,
		},
		'personal_monthly_USD_taxfree': {
			name: 'Prototypo professional monthly subscription',
			recurrence: 'month',
			realAmount: '$8.00',
			discount: -700,
		},
		'personal_monthly_EUR_taxfree': {
			name: 'Prototypo professional monthly subscription',
			recurrence: 'month',
			realAmount: '8.00€',
			discount: -700,
		}
	});

	const paymentStore = stores['/paymentStore'] = new Remutable({});

	const breadcrumbStore = stores['/breadcrumb'] = new Remutable({});

	const errors = stores['/errors'] = new Remutable({});

	const success = stores['/success'] = new Remutable({});

	const userInfos = stores['/userInfos'] = new Remutable({});

	const upcomingInvoice = stores['/upcomingInvoice'] = new Remutable({});

	const loading = stores['/loading'] = new Remutable({});

	const tabs = stores['/tabs'] = new Remutable({
		current: 'user',
	});
});
