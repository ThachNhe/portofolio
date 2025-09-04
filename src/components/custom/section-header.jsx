export const SectionHeader = ({ title, subtitle }) => {
   return (
      <header className="mb-20 text-center">
         <h2 className="text-5xl font-bold">{title}</h2>
         <p className="mt-2 text-gray-600 text-lg">{subtitle}</p>
      </header>
   )
}
