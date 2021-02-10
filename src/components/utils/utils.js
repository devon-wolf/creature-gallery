export function getUniqueListItems(property, array) {
	let listItems = [];
	for (let i of array) {
		if (!listItems.some(item => item === i[property])) {
			listItems.push(i[property]);
		}
	}
	return listItems;
}