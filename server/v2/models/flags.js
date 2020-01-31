import connect from "./configs/connect-db";
import { ADD_NEW_FLAG,GET_A_FLAG_BY_ANNOUNC_ID, GET_PARICULAR_FLAG_BY_REASON } from "./configs/queries";

class Flag{
    async addNewFlag(flag) {
        const { announcement_id, reason, description } = flag;
        const { rows } = await connect.query({ text: ADD_NEW_FLAG, values: [announcement_id, reason, description] });
        return rows;
    }

    async getFlagByAnnouncement(announcement_id) {
        const {rows} = await connect.query({ text: GET_A_FLAG_BY_ANNOUNC_ID, values: [announcement_id] });
        return rows;
    }

    async getFlagByReason(reason) {
        const {rows} = await connect.query({ text: GET_PARICULAR_FLAG_BY_REASON, values: [reason] });
        return rows;
    }
}

class FlagData{
    constructor(flag) {
        this.announcement_id = flag.announcement_id;
        this.reason = flag.reason;
        this.description = flag.description;
    }
}
const flags = new Flag();
export default {flags,FlagData}