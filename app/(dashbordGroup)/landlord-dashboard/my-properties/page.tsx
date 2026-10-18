import React from 'react'
import LandlordProperties from './_components/landlord-properties'
import { getLandlordProperties } from '@/service/properties/getLandlordProperties';

export default async function MyProperties() {
    const properties = await getLandlordProperties()



    return (
        <div><LandlordProperties properties= {properties.data} /></div>
    )
}
