export default function Loading() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl px-6 animate-pulse">
        <div className="text-center mb-16">
          <div className="h-12 bg-gray-200 rounded-lg w-2/3 mx-auto mb-4" />
          <div className="h-5 bg-gray-200 rounded w-1/2 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-48 bg-gray-200 rounded-xl" />
          <div className="h-48 bg-gray-200 rounded-xl" />
        </div>
      </div>
    </section>
  );
}
