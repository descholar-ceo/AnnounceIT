import { announcements } from '../js/resources/announcements.js';

/** varibales */
const singleResult = document.querySelectorAll('tr[single-result]');
const announcementsDisplayList = document.querySelector('div#announcements-display');
const announcementDisplayDetails = document.querySelector('div#announcement-details-display');

/** varibales which will hold announcement details */
const announcementTitle = document.querySelector('h2#announcement-title');
const announcementContent = document.querySelector('span#announcement-content');
const announcementStatus = document.querySelector('span#announcement-status');
const announcementOwner = document.querySelector('span#announcement-owner');
const announcementStartDate = document.querySelector('span#announcement-startdate');
const announcementEndDate = document.querySelector('span#announcement-enddate');
const announcementUpdateBtn = document.querySelector('button[announcement-update-btn]');
const announcementDeleteBtn = document.querySelector('button[announcement-delete-btn]');
const goBackToListBtn = document.querySelector('button#goback-to-list-btn');

export const clickedSingleResult = (event) => {

    announcements.forEach((currAnnounc) => {
        if (currAnnounc.id === event.target.id) {

            announcementsDisplayList.classList.add('hidden-element');
            announcementDisplayDetails.classList.remove('hidden-element');

            announcementTitle.innerHTML = currAnnounc.title;
            announcementContent.innerHTML = currAnnounc.text;
            announcementStatus.innerHTML = currAnnounc.status;
            announcementOwner.innerHTML = currAnnounc.owner;
            announcementStartDate.innerHTML = `Valid since : ${currAnnounc.startDate}`;
            announcementEndDate.innerHTML = `To : ${currAnnounc.endDate}`;

            announcementDeleteBtn.setAttribute('id', currAnnounc.id);

            announcementUpdateBtn.setAttribute('id', currAnnounc.id);
            announcementDeleteBtn.setAttribute('id', currAnnounc.id);

            clickedElt = {
                title: currAnnounc.title,
                content: currAnnounc.text,
                status: currAnnounc.status,
                owner: currAnnounc.owner,
                startDate: currAnnounc.startDate,
                endDate: currAnnounc.endDate
            }
        }
    });
   
};

singleResult.forEach((currTr) => {
    currTr.addEventListener('click', (event) => clickedSingleResult(event));
});

goBackToListBtn.addEventListener('click', () => {
    location.reload();
});

announcementDeleteBtn.addEventListener('click', (event) => {

    /**
     * This function is working well, it is there to be used to remove an element 
     * array, it will be used at the fullest, when we have real data from backend
     */
    delete announcements[event.target.id];

    announcementsDisplayList.classList.remove('hidden-element');
    announcementDisplayDetails.classList.add('hidden-element');
})

announcementUpdateBtn.addEventListener('click', (event) => {
    let createAnnouncementPage;
    let clickedAnnouncement;
    const currAddress = window.location.href;
    if (currAddress.includes('admin-side')) {
        createAnnouncementPage = '../create-announcement.html';
    } else {
        createAnnouncementPage = '../html/create-announcement.html';
    }

    announcements.forEach((currAnnounc) => {
        if (currAnnounc.id === event.target.id) {
            clickedAnnouncement = currAnnounc;
        }
    });

    location.replace(`${createAnnouncementPage}?${JSON.stringify(clickedAnnouncement)}`);
});
