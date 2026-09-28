import { IconChevronDown, IconPlus } from "./Icons"

// icone: "chevron" (abre/fecha algo) ou "plus" (ação de adicionar)
function ExpandButton({ label, icone = "chevron", aberto = false, small = false, onClick }) {

  return (

    <button
      type="button"
      className={`expand-btn ${small ? "small" : ""} ${aberto ? "open" : ""}`}
      onClick={onClick}
      aria-expanded={icone === "chevron" ? aberto : undefined}
    >

      <span>{label}</span>

      {icone === "plus"
        ? <IconPlus width={18} height={18} strokeWidth={2.2} />
        : <IconChevronDown width={22} height={22} strokeWidth={2.2} />
      }

    </button>

  )

}

export default ExpandButton
