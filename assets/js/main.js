// Toast function
function toast({
    title = '',
    message = '',
    type = '',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        const icons = {
            notification: 'bi bi-bell-fill',
            success: 'bi bi-check-circle-fill',
            info: 'bi bi-info-circle-fill',
            warning: 'bi bi-exclamation-circle-fill',
            error: 'bi bi-exclamation-circle-fill'
        };

        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `fadeInToast ease 0.3s, fadeOutToast linear 1s ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__content">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="bi bi-x-lg"></i>
            </div>
        `;
        main.appendChild(toast);

        // auto remove toast
        const autoRemoveToast = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1500);

        // remove toast when click
        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveToast);
            }
        };
    }
};

function showSuccessToast(message) {
    toast({
        title: 'Success',
        message: message,
        type: 'success',
        duration: 5000
    });
}
function showErrorToast(message) {
    toast({
        title: 'Error',
        message: message,
        type: 'error',
        duration: 5000
    });
}