import getStartOfWeek from './index.js'

/** Fetch the user's locale via Deno */
// @ts-ignore
const language = Deno.env.get('LANG') || ''

// Export
export default getStartOfWeek(language)
