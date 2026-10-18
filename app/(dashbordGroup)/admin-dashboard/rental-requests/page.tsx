import { getAllRentalRequestByAdmin } from '@/service/admin/getAllRentalRequestByAdmin';
import React from 'react';
import RentalRequests from './_components/RentalRequest';



const RentalPages = async () => {

    const requests = await getAllRentalRequestByAdmin()



    return (
        <div>
            <RentalRequests requests={requests} />
        </div>
    );
};

export default RentalPages;