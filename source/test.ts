import kava from 'kava'
import startOfWeek from './'

kava.suite('start-of-week', function(suite, test) {
	test('monday or sunday', function() {
		const result = startOfWeek
		console.log(result)
		if (result !== 0 && result !== 1) {
			throw new Error('unexpected result')
		}
	})
})
