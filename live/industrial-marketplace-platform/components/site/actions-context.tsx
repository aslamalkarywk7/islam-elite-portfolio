"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type RegisterRole =
  | "investor"
  | "expert"
  | "supplier"
  | "supervisor"
  | "service"
  | "distributor"
  | "general"

type ActionsContextValue = {
  openRegister: (role?: RegisterRole) => void
  closeRegister: () => void
  openContact: (subject?: string) => void
  closeContact: () => void
  openMenu: () => void
  closeMenu: () => void
  openCity: (cityId: string) => void
  closeCity: () => void
  openSector: (sectorId: string) => void
  closeSector: () => void
  registerOpen: boolean
  registerRole: RegisterRole
  contactOpen: boolean
  contactSubject: string
  menuOpen: boolean
  cityOpen: boolean
  cityId: string | null
  sectorOpen: boolean
  sectorId: string | null
}

const ActionsContext = createContext<ActionsContextValue | null>(null)

export function ActionsProvider({ children }: { children: ReactNode }) {
  const [registerOpen, setRegisterOpen] = useState(false)
  const [registerRole, setRegisterRole] = useState<RegisterRole>("general")
  const [contactOpen, setContactOpen] = useState(false)
  const [contactSubject, setContactSubject] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)
  const [cityOpen, setCityOpen] = useState(false)
  const [cityId, setCityId] = useState<string | null>(null)
  const [sectorOpen, setSectorOpen] = useState(false)
  const [sectorId, setSectorId] = useState<string | null>(null)

  const value: ActionsContextValue = {
    openRegister: (role = "general") => {
      setRegisterRole(role)
      setRegisterOpen(true)
    },
    closeRegister: () => setRegisterOpen(false),
    openContact: (subject = "") => {
      setContactSubject(subject)
      setContactOpen(true)
    },
    closeContact: () => setContactOpen(false),
    openMenu: () => setMenuOpen(true),
    closeMenu: () => setMenuOpen(false),
    openCity: (id: string) => {
      setCityId(id)
      setCityOpen(true)
    },
    closeCity: () => setCityOpen(false),
    openSector: (id: string) => {
      setSectorId(id)
      setSectorOpen(true)
    },
    closeSector: () => setSectorOpen(false),
    registerOpen,
    registerRole,
    contactOpen,
    contactSubject,
    menuOpen,
    cityOpen,
    cityId,
    sectorOpen,
    sectorId,
  }

  return <ActionsContext.Provider value={value}>{children}</ActionsContext.Provider>
}

export function useActions() {
  const ctx = useContext(ActionsContext)
  if (!ctx) throw new Error("useActions must be used within ActionsProvider")
  return ctx
}
