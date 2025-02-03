import { useEffect, useState } from 'react'

interface ClientOnlyProps {
  children: React.ReactNode
}

function ClientOnly({ children }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState<boolean>(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <>{children}</>
}

export default ClientOnly
