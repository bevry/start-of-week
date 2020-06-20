import getStartOfWeek from './index.js'

/** Fetch the user's locale via Node.js */
// @ts-ignore
const language = process.env.LANG || ''

// Export
export default getStartOfWeek(language)
