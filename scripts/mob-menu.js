(() => {
	const refs = {
		openModalBtn: document.querySelector(".menu-open-btn"),
		closeModalBtn: document.querySelector(".mob-menu__close-btn"),
		modal: document.querySelector(".mob-menu"),
		body: document.querySelector("body"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
		refs.body.classList.toggle("no-scroll");
	}
})();
