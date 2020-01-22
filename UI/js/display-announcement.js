import { announcements } from './resources/announcements.js';
const displayAnnouncementsDiv = document.getElementById('announcements-display');

const announcementsList = announcements.map((announc) => (
    `
    <tr id=${announc.id} key=${announc.id} single-result>
        <td id=${announc.id}>${announc.id}</td>
        <td id=${announc.id}>${announc.title}</td>
        <td id=${announc.id}>${announc.startDate}</td>
        <td id=${announc.id}>${announc.endDate}</td>
        <td id=${announc.id}>${announc.status}</td>
    </tr>`
));

const displayAnnouncements = () => {
    displayAnnouncementsDiv.innerHTML = `
    <table class="text-15 list-of-announcements">
        <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Valid from</th>
              <th>Valid until</th>
              <th>Status</th>
            </tr>
        </thead>
        <tbody>${announcementsList.join("")}</tbody>
    </table>
    <div class="container">
          <button 
          class="bg-dark width-20 margin-top-2 hand-cursor rounded-corner-15">
          Click here to load more ...</button>
        </div>
    `;
}

displayAnnouncements();