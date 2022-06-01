'use strict';




const sendDataXML = () => {

	const dataSendXML = new XMLHttpRequest();
	dataSendXML.open('post', 'https://jsonplaceholder.typicode.com/posts', true);
	dataSendXML.send({
		"user": "Vlad",
		"age": 33,
		"role": "developer"
	});

	console.log(dataSendXML);

};

const sendData = () => {

	const dataSend = fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
			"user": "Vlad",
			"age": 33,
			"role": "developer"
		})
	}).catch(error => console.log(error, 'Ошибка отловлена "catch при отправке"'));

	console.log(dataSend);


};

const getData = () => {
	const dataDb = fetch('./db.json');

	dataDb

		.then(response => response.json())
		.then(data => console.log(data))
		.catch(error => console.log(error, 'Ошибка отловлена "catch"'));

	console.log(dataDb);

	sendData();
	sendDataXML();
};



getData();