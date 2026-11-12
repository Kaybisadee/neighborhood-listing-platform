export interface PropertyListing {
  name: string;
  location: string;
  price: string;
  bedrooms: string;
}
const apartments: PropertyListing[] = [
  {
    name: "Modern Downtown Apartment",
    location: "Downtown Los Angeles",
    price: "$1,850/month",
    bedrooms: "2 Bedrooms",
  },
  {
    name: "Campus View Residence",
    location: "University District",
    price: "$1,450/month",
    bedrooms: "1 Bedroom",
  },
  {
    name: "Sunset Garden Apartments",
    location: "West Los Angeles",
    price: "$2,100/month",
    bedrooms: "3 Bedrooms",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
            Neighborhood Listing Platform
          </p>

          <h1 className="mb-4 text-4xl font-bold">
            Welcome to Neighborhood Listing Platform
          </h1>

          <p className="text-lg text-slate-600">
            Discover apartments and housing opportunities
            in your neighborhood.
          </p>
        </header>

        <section>
          <h2 className="mb-6 text-2xl font-semibold">
            Available Apartments
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {apartments.map((apartment) => (
              <article
                key={apartment.name}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex h-28 items-center justify-center rounded-lg bg-blue-100 text-4xl">
                  🏠
                </div>

                <h3 className="mb-2 text-xl font-bold">
                  {apartment.name}
                </h3>

                <p className="mb-2 text-slate-600">
                  {apartment.location}
                </p>

                <p className="mb-4 text-sm text-slate-500">
                  {apartment.bedrooms}
                </p>

                <p className="text-lg font-bold text-blue-700">
                  {apartment.price}
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-16 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          Neighborhood Listing Platform | Student Project
        </footer>
      </div>
    </main>
  );
}
