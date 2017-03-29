export function currency (value, currency, decimals) {
	if (currency) {
		return "currency: "+value + currency
	} else {
		return "currency: "+value
	}
	
}