import { defineStore } from 'pinia'
import nav from '../../data/nav.json'
import info from '../../data/info.json'

type Positions = {
  [key: string]: string | number
}
// Define a type for the slice state
interface GlobalState {
  title?: string
  jwt?: string | undefined
  user?: { name: string | undefined; roles: string[] | null }
  nav?: object
  width?: number
  height?: number
  navPos?: Positions
  top?: string | number
  left?: string | number
  right?: string | number
  bottom?: string | number
  section?: string
}
export const useGlobalStore = defineStore('global', {
  // arrow function recommended for full type inference
  state: (): GlobalState => {
    const {innerWidth, innerHeight} = window
    return {
      // all these properties will have their type inferred automatically
      title: info.title,
      jwt: undefined,
      user: { name: undefined, roles: [] },
      nav,
      width: (typeof window !== 'undefined' && innerWidth) || 0,
      height: (typeof window !== 'undefined' && innerHeight) || 0,
      navPos:
        typeof localStorage !== 'undefined'
          ? JSON.parse(
              localStorage.getItem('navPos') ||
                '{"top":496.5,"right":"auto","bottom":"auto","left":889}',
            )
          : {},
      top: 0,
      left: 'auto',
      right: 'auto',
      bottom: 0,
      section: '',
    }
  },
  actions: {
    loadGlobal(args: { title: any; jwt: any; user: any; nav: any }) {
      const { title, jwt, user, nav } = args
      this.title = title || this.title
      this.jwt = jwt || this.jwt
      this.user = user || this.user
      this.nav = nav || this.nav
    },
    resizeGlobal(args: { navPos: any }) {
      const { navPos } = args
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.navPos = navPos || this.navPos
    },
    setGlobal(args: { section: any; top: any; left: any }) {
      const { section, top, left } = args
      this.section = section || this.section
      this.top = top || this.top
      this.left = left || this.left
    },
  },
})
