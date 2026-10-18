"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

const roleName = [
  "TENANT",
  "LANDLORD"
] as const

export function ComboboxBasic() {
  return (
    <Combobox items={roleName}>
      <ComboboxInput placeholder='TENANT or LANDLORD ' />
      <ComboboxContent>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item} className="font-medium ">
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
