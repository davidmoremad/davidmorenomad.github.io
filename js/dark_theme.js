/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

const switchButton = document.getElementById('darkModeButton');

switchButton.addEventListener('change', () => {
    if (switchButton.checked) {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
	    document.body.classList.toggle('dark');
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
	    document.body.classList.toggle('light');
    }
    }
);

