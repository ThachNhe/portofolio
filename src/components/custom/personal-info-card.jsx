export const PersonalInfoCard = ({icon: Icon, size, label, value}) => {
   return (
      <li className="flex items-center gap-2">
         <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center">
            <Icon size={size} className="text-white" />
         </div>
         <div className="flex-1">
            <span className="text-md font-semibold">{label}: </span>
            <span className="text-sm text-gray-400 break-words">{value}</span>
         </div>
      </li>
   )
}