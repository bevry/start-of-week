import getStartOfWeek from './index.js'

/** Fetch the user's locale via client-side */
// @ts-ignore
const language = window.navigator.language || ''

// Export
export default getStartOfWeek(language)
