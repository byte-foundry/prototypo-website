function values(prefix) {
	return {
		get(params) {
			return hoodie.store.find(`${prefix}values`,`${params.typeface}`);
		},
		save(params) {
			return hoodie.store.updateOrAdd(`${prefix}values`,`${params.typeface}`,{
					values: params.values
				});
		},
		clear() {
			return hoodie.store.removeAll(`${prefix}values`);
		}
	}
}

export var AppValues = values('newapp');
export var UserValues = values('userinfos');
