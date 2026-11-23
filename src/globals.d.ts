import { IStaticMethods } from 'preline/preline'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
    HSStaticMethods: IStaticMethods
    HSOverlay?: {
      close: (selector: string) => void
      open: (selector: string) => void
      getInstance: (
        selector: string,
        open?: boolean
      ) => {
        element: {
          close: () => void
          open: () => void
        }
      }
    }
  }
}
