let promise = Promise.reject(new Error("프라미스 실패!"));
setTimeout(() => promise.catch(err => alert('잡았다!')), 1000);

window.addEventListener('unhandledrejection', event => alert(event.reason));