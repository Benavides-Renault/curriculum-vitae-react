import * as React from "react"

const MOBILE_BREAKPOINT = 768
const TABLET_BREAKPOINT = 1024

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Initial setup
    handleResize()
    
    // Add resize event listener
    window.addEventListener('resize', handleResize)
    
    // Cleanup when unmounting
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile
}

export function useDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  const [deviceType, setDeviceType] = React.useState<'mobile' | 'tablet' | 'desktop'>('desktop')

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        setDeviceType('mobile')
      } else if (window.innerWidth < TABLET_BREAKPOINT) {
        setDeviceType('tablet')
      } else {
        setDeviceType('desktop')
      }
    }
    
    // Initial setup
    handleResize()
    
    // Add resize event listener
    window.addEventListener('resize', handleResize)
    
    // Cleanup when unmounting
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return deviceType
}
