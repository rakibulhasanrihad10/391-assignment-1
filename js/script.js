// ============= send mail =============
function openMailClient() {
    window.location.href = "mailto:rakibulhasanrihad@gmail.com";
}
// ============= send mail =============





// ============= Last modified date display =============
let lastMod = new Date(document.lastModified);
let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone: 'Asia/Dhaka'
};
let formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(lastMod);
document.getElementById("last-modified").textContent += `${formattedDateTime} (BD Local Time, GMT+6)`;
// ============= Last modified date display =============





// ============= page scroll =============
// ============= page scroll =============
