import CatalogClient from './Catalog.client';

interface Query {
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
  limit?: string;
  page?: string;
}

export default async function Catalog() {
  return (
    <div className="container">
      <CatalogClient />
    </div>
  );
}
