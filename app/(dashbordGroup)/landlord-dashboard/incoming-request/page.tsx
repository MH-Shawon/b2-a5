import { Card, CardContent } from '@/components/ui/card';
import { getAllRequestOfLandlordProperty } from '@/service/properties/getAllRequestOfLandlordProperty';
import { FileText } from 'lucide-react';
import React from 'react'
import IncomingRequests from './_component/IncomingRequest';

export default async function page() {
    const requests = await getAllRequestOfLandlordProperty()
    console.log(requests.data);

    if (!requests.data) {
        return (
            <Card className="rounded-2xl">
                <CardContent className="flex min-h-80 flex-col items-center justify-center px-6 text-center">
                    <div className="flex size-16 items-center justify-center rounded-2xl bg-muted">
                        <FileText className="size-7 text-muted-foreground" />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold">
                        No incoming requests
                    </h3>

                    <p className="mt-2 max-w-md text-sm text-muted-foreground">
                        You don&apost have any rental requests yet.
                        Requests from tenants will appear here when
                        someone wants to rent one of your properties.
                    </p>
                </CardContent>
            </Card>
        );
    }

    return (
        <IncomingRequests requests={requests.data} />
    )
}


