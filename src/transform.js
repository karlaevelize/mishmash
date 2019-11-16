function groupAdultsByAgeRange(result) {
    return result.filter(function(person){
        return person.age >= 18
    })
    .reduce(function(accumulator, person){
        if (person.age <= 20) {
            if (! accumulator ['20 and younger']) {
                accumulator['20 and younger'] = []
            }
            accumulator['20 and younger'].push(person)
        }
        else if (person.age <= 30) {
            if (! accumulator ['21-30']) {
                accumulator['21-30'] = []
            }
            accumulator['21-30'].push(person)
        }
        else if (person.age <= 40) {
            if (! accumulator ['31-40']) {
                accumulator['31-40'] = []
            }
            accumulator['31-40'].push(person)
        }
        else if (person.age <= 50) {
            if (! accumulator ['41-50']) {
                accumulator['41-50'] = []
            }
            accumulator['41-50'].push(person)
        }
        else {
            if (! accumulator ['51 and older']) {
                accumulator['51 and older'] = []
            }
            accumulator['51 and older'].push(person)
        }
        return accumulator
    }, {})

}

module.exports = {groupAdultsByAgeRange}