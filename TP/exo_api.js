async function getData() {
	const url = "https://tyradex.vercel.app/api/v1/gen/9";
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
		const json = await response.json();
		console.log(json);
		for (let i = 0; i < json.length; i++) {
			const div = document.createElement("div");
			document.body.append(div);
			div.classList.add("card");
			const img = document.createElement("img");
			img.src = json[i].sprites.regular;
			img.classList.add("card-img-top");
			div.append(img);
			const br = document.createElement("br");
			div.append(br);
			const p = document.createElement("h3");
			p.textContent = json[i].name.fr;
			div.append(p);
			const br1 = document.createElement("br");
			div.append(br1);
			const type = document.createElement("p");
			type.textContent = "Type : ";
			for (let j = 0; j < json[i].types.length; j++) {
				j == 1
					? (type.textContent += `/${json[i].types[j].name}`)
					: (type.textContent += json[i].types[j].name);
			}
			div.append(type);
			const br2 = document.createElement("br");
			div.append(br2);
			const poids = document.createElement("p");
			poids.textContent = `Poids :  ${json[i].weight}`;
			div.append(poids);
			const br3 = document.createElement("br");
			div.append(br3);
			const taille = document.createElement("p");
			taille.textContent = `Taille :  ${json[i].height}`;
			div.append(taille);
			const br4 = document.createElement("br");
			div.append(br4);
		}
	} catch (error) {
		console.error(error.message);
	}
}

getData();
