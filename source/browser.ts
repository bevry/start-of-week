import getStartOfWeek from './index.js'

/** Fetch the user's locale via client-side */
const language = navigator.language || ''

// Export
export default getStartOfWeek(language)
