function sortByPriceAscending(jsonString) {
    const result = JSON.parse(jsonString);

    result.sort((v1, v2) => {
        if (v1.price > v2.price) return 1;
        else if (v1.price < v2.price) return -1;
        else if (v1.name > v2.name) return 1;
        else if (v1.name < v2.name) return -1;
        else return 0
    })

  return JSON.stringify(result);
}

console.log(sortByPriceAscending('[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'));

// sortByPriceAscending('[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]');