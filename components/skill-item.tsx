interface SkillItemProps {
  name: string
  checked: boolean
}

export default function SkillItem({ name, checked }: SkillItemProps) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-5 h-5 border ${checked ? "bg-[#38bdf8] border-[#38bdf8]" : "border-gray-600"} flex items-center justify-center`}
      >
        {checked && <span className="text-white">✓</span>}
      </div>
      <span className="text-sm">{name}</span>
    </div>
  )
}

