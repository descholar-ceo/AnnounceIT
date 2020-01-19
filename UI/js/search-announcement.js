import {announcements} from './resources/announcements.js'
const searchBar = document.querySelector('input#searching-bar');
const displayAnnouncementsDiv = document.querySelector('div#announcements-display');

const searchingFunc = (searchQuery) => {
    
    let matchings = announcements.filter((announc) => {
        const regex = new RegExp(`^${searchQuery}`, 'gi');
        return announc.state.match(regex)||announc.id.match(regex);
    });

    let resultArr;
    if (matchings.length > 0) {
        resultArr = matchings.map((match) => (
    `
    <tr key=${match.id}>
        <td>${match.id}</td>
        <td>${match.title}</td>
        <td>${match.startDate}</td>
        <td>${match.endDate}</td>
        <td>${match.state}</td>
        <td>Update</td>
    </tr>`
        ));
    } else {
        resultArr = [`<tr>
        <td>.</td>
        <td></td>
        <td><span class="text-danger">No result found</span></td>
        <td></td>
        <td></td>
        <td>Update</td>`];
    }

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
        <tbody>${resultArr.join("")}</tbody>
    </table>
    `;
}

searchBar.addEventListener('input', () => searchingFunc(searchBar.value));