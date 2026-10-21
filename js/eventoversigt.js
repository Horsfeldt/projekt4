function updateRealTime() {
	const timeElement = document.getElementById("real-time");

	if (timeElement) {
		const now = new Date();

		timeElement.textContent = now.toLocaleTimeString("da-DK", {
			hour: "2-digit",
			minute: "2-digit",
			hour12: false
		});
	}
}

document.addEventListener("DOMContentLoaded", function () {
	updateRealTime();
	setInterval(updateRealTime, 1000);
});
