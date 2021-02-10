export function getUniqueListItems(property, array) {
	let listItems = [];
	for (let i of array) {
		if (!listItems.some(item => item === i[property])) {
			listItems.push(i[property]);
		}
	}
	return listItems;
}

export function filterByStringAndNumber(component, stringProp, numProp, array) {
	const firstFilter = filterByString(component, stringProp, array);
	const secondFilter = filterByNumber(component, numProp, firstFilter);

	return secondFilter;
}

function filterByString(component, property, array) {
	const filteredArray = array.filter(item => {
		if (!component.state[property]) return true;
		return item[property] === component.state[property];
	});

	return filteredArray;
}

function filterByNumber(component, property, array) {
	const filteredArray = array.filter(item => {
		if (!component.state[property]) return true;
		return item[property] === Number(component.state[property]);
	});

	return filteredArray;
}