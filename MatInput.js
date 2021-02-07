export default class MatInput {
	constructor(id, config = {}) {
		let inputElement = document.querySelector(id)
		inputElement.classList.add('form-input')
		let inputLabel = document.querySelector(`label[for='${id.replace('#', '')}']`)
		inputLabel.classList.add('form-label')
		let parent = inputElement.parentNode;

		if (config.HideFirstOption) {
			let newOpt = new Option('', '', true, true);
			newOpt.hidden = true
			inputElement.add(newOpt)
		}

		if (inputElement.value.length > 0) {
			inputLabel.classList.add('form-label--floating')
			inputLabel.style.backgroundColor = config.backgroundColor || "#fff"
		}

		inputElement.addEventListener('focusin', function (event) {
			parent.classList.add('active')
			parent.classList.add('hasVal')
			inputLabel.classList.add('form-label--floating')
			inputLabel.style.backgroundColor = config.backgroundColor || "#fff"
		})

		inputElement.addEventListener('focusout', function (event) {
			parent.classList.remove('active')
			let length = event.target.value.length;
			if (length > 0) {
				return;
			}
			parent.classList.remove('hasVal')
			inputLabel.classList.remove('form-label--floating')
			inputLabel.style.backgroundColor = "unset"
		})
	}
}
