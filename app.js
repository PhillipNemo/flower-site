let wrapper = document.getElementById('wrapper')
let modeText = document.getElementById('mode')
let status = 0;

changeMode = () => {
	// wrwrapperer.classList.toggle('dark')
	if (status == 0) {
        wrapper.classList.remove('light');
        wrapper.classList.add('dark');
        modeText.innerHTML = `<i class="icofont-sun-alt icon"></i>`;
		status = 1;
    } else {
        wrapper.classList.remove('dark');
        wrapper.classList.add('light');
        modeText.innerHTML = `<i class="icofont-moon icon"></i>`;
		status = 0;
    }
}