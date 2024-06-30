"use client"

import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react"
import { ThemeProvider } from "next-themes"
import { Toaster } from "sonner"

export const SettingsContext = createContext<{
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}>({
  isOpen: false,
  setOpen: function (value: React.SetStateAction<boolean>): void {},
})

export function AppProviders(props: { children: ReactNode }) {
  const [isOpen, setOpen] = useState<boolean>(false)
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SettingsContext.Provider value={{ isOpen, setOpen }}>
        {props.children}
        <Toaster className={"bg-primary"} />
      </SettingsContext.Provider>
    </ThemeProvider>
  )
}
