
import PropertyDetails from '../../_conponents/PropertyDetails/Property_details'

const  SingleProperties = async ({ params, }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  
 



  return (
    <div>

      <PropertyDetails id={id} />

    </div>
  )
}

export default SingleProperties