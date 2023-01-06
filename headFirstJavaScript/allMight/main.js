localStorage.setItem(`name`, `mohammed`);
localStorage.removeItem(`name`);

sessionStorage.setItem(`name`, `ali`);
sessionStorage.setItem(`name`, `Ahmed`);

document.cookie = "name=mohammed; expires=" + new Date(2023, 1, 6).toUTCString();
document.cookie = "lastName=Ali; expires=" + new Date(2023, 0, 7).toUTCString();

console.log(document.cookie);