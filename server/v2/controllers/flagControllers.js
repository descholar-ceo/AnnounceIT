import flag from '../models/flags';
    

    // add flags
export const addFlag = async (req, res)=>{
    const newFlagData = new flag.FlagData(req.body);
    const addedFlag = await flag.flags.addNewFlag(newFlagData);

    res.status(201).send({
        status: 'success',
        data: addedFlag
    });
     
}

// getting a particular flag by announcement_id
export const getFlagByAnnouncement = async (req, res) => {
    const { announcId } = req.params;
    if (!isNaN(announcId)) {
        const gottenFlag = await flag.flags.getFlagByAnnouncement(parseInt(announcId));
res.status(200).send({
            status: 'success',
            data: gottenFlag
        });
    
    } else {
        res.status(404).send({
            status: 'error',
            error: 'Enter a number!'
        });
    }
    
}

// getting a flag by reason
export const getFlagByReason = async (req, res) => {
    const { reason } = req.params;
    const gottenFlags = await flag.flags.getFlagByReason(reason);
    res.status(200).send({
            status: 'success',
            data: gottenFlags
        });
}