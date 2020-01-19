import {announcements} from '../js/resources/announcements.js';
const displayAnnouncementsDiv = document.getElementById('announcements-display');

const announcementsList = announcements.map((announc) => (
    `
    <tr key=${announc.id}>
        <td>${announc.id}</td>
        <td>${announc.title}</td>
        <td>${announc.startDate}</td>
        <td>${announc.endDate}</td>
        <td>${announc.state}</td>
        <td>Update</td>
    </tr>`
));

const displayAnnouncements = () => {
    displayAnnouncementsDiv.innerHTML = `
    <table class="width-100 rounded-corner-15 list-of-announcements">
        <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Valid from</th>
              <th>Valid until</th>
              <th>State</th>
              <th>Action</th>
            </tr>
        </thead>
        <tbody>${announcementsList.join("")}</tbody>
    </table>
    <div>
          <button class="bg-dark width-100 hand-cursor">Click here load more ...</button>
        </div>
    `;
}

displayAnnouncements();