import { RentalRequest } from "@/lib/rentalsTypes";
import RentalRequestCard from "./RentalRequestCard";

interface RentalRequestsProps {
  requests: RentalRequest[];
}

export default function RentalRequests({
  requests,
}: RentalRequestsProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {requests.map((request) => (
        <RentalRequestCard
          key={request.id}
          request={request}
        />
      ))}
    </div>
  );
}