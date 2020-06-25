import { equal } from 'assert-helpers'
import kava from 'kava'
import getSW from './index.js'

const fixtures: Array<[string, number]> = [
	['', 1],
	['en_AU', 1],
	['en_US', 0],
	['en_CA', 0],
	['en_AU.UTF-8', 1],
	['en_US.UTF-8', 0],
]

kava.suite('start-of-week', function (suite, test) {
	for (const [locale, expected] of fixtures) {
		test(`locale: [${locale}]`, function () {
			equal(getSW(locale), expected)
		})
	}
})
