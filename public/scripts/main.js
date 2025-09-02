// This file contains the main JavaScript logic for the Sanctuary Unblocker application.
// It handles DOM manipulation, sets up event listeners, and calls proxy functions.

document.addEventListener('DOMContentLoaded', () => {
    const unblockButton = document.getElementById('unblock-button');
    const resultContainer = document.getElementById('result-container');

    unblockButton.addEventListener('click', async () => {
        const urlToUnblock = document.getElementById('url-input').value;
        if (urlToUnblock) {
            try {
                const response = await fetch(`/api/unblock?url=${encodeURIComponent(urlToUnblock)}`);
                const data = await response.json();
                displayResult(data);
            } catch (error) {
                console.error('Error unblocking URL:', error);
                resultContainer.innerHTML = 'Error unblocking URL. Please try again.';
            }
        } else {
            resultContainer.innerHTML = 'Please enter a URL to unblock.';
        }
    });

    function displayResult(data) {
        if (data.success) {
            resultContainer.innerHTML = `Unblocked URL: <a href="${data.unblockedUrl}" target="_blank">${data.unblockedUrl}</a>`;
        } else {
            resultContainer.innerHTML = 'Failed to unblock the URL.';
        }
    }
});