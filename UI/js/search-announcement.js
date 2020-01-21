import {announcements} from './resources/announcements.js'
const searchBar = document.querySelector('input#searching-bar');
const displayAnnouncementsDiv = document.querySelector('div#announcements-display');

const searchingFunc = (searchQuery) => {
    
    let matchings = announcements.filter((announc) => {
        const regex = new RegExp(`^${searchQuery}`, 'gi');
        return announc.status.match(regex) ||
            announc.id.match(regex) ||
            announc.title.match(regex) ||
            announc.startDate.match(regex) ||
            announc.endDate.match(regex);
    });

    let resultArr;
    if (matchings.length > 0) {
        resultArr = matchings.map((match) => (
    `
    <tr key=${match.id} id=${match.id} single-announcement>
        <td id=${match.id}>${match.id}</td>
        <td id=${match.id}>${match.title}</td>
        <td id=${match.id}>${match.startDate}</td>
        <td id=${match.id}>${match.endDate}</td>
        <td id=${match.id}>${match.status}</td>
    </tr>`
        ));
    } else {
        resultArr = [`<tr>
        <td></td>
        <td></td>
        <td><span class="text-danger">No result found</span></td>
        <td></td>
        <td></td>`];
    }

    displayAnnouncementsDiv.innerHTML = `
    <table class="width-100 rounded-corner-15 list-of-announcements margin-bottom-5">
        <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Valid from</th>
              <th>Valid until</th>
              <th>status</th>
            </tr>
        </thead>
        <tbody>${resultArr.join("")}</tbody>
    </table>
    `;
}

searchBar.addEventListener('input', () => searchingFunc(searchBar.value));