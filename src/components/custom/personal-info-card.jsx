export const PersonalInfoCard = ({icon: Icon, size, label, value}) => {
   return (
      <div className="flex items-center gap-2">
         <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center">
            <Icon size={size} className="text-white" />
         </div>
         <div>
            <h3 className="text-lg font-semibold">{label}</h3>
            <p className="text-sm text-gray-400">{value}</p>
         </div>
      </div>
   )
}