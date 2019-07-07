let id = setInterval(() => {
	let buyButton = Array.from(document.getElementsByTagName('A')).filter(a => a.textContent.includes('Buy'))[0];

	if (buyButton) {
		clearInterval(id);

		new MutationObserver((mutations, self) => {
			let submitButton = Array.from(document.getElementsByTagName('A')).filter(a => a.textContent.includes('Submit'))[0];

			if (submitButton) {
				submitButton.click();
				self.disconnect();
			}
		}).observe(document, {
			childList: true,
			attributes: true,
			subtree: true
		});

		buyButton.click();
	}
}, 1000);
