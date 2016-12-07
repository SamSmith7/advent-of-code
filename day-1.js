const data = [{pos: [0, 0], dir: 0}, 'L5', 'R1', 'R3', 'L4', 'R3', 'R1', 'L3', 'L2', 'R3', 'L5', 'L1', 'L2', 'R5', 'L1', 'R5',
'R1', 'L4', 'R1', 'R3', 'L4', 'L1', 'R2', 'R5', 'R3', 'R1', 'R1', 'L1', 'R1', 'L1', 'L2', 'L1', 'R2', 'L5', 'L188', 'L4', 'R1', 'R4', 'L3',
'R47', 'R1', 'L1', 'R77', 'R5', 'L2', 'R1', 'L2', 'R4', 'L5', 'L1', 'R3', 'R187', 'L4', 'L3', 'L3', 'R2', 'L3', 'L5', 'L4',
'L4', 'R1', 'R5', 'L4', 'L3', 'L3', 'L3', 'L2', 'L5', 'R1', 'L2', 'R5', 'L3', 'L4', 'R4', 'L5', 'R3', 'R4', 'L2', 'L1',
'L4', 'R1', 'L3', 'R1', 'R3', 'L2', 'R1', 'R4', 'R5', 'L3', 'R5', 'R3', 'L3', 'R4', 'L2', 'L5', 'L1', 'L1', 'R3', 'R1',
'L4', 'R3', 'R3', 'L2', 'R5', 'R4', 'R1', 'R3', 'L4', 'R3', 'R3', 'L2', 'L4', 'L5', 'R1', 'L4', 'L5', 'R4', 'L2', 'L1',
'L3', 'L3', 'L5', 'R3', 'L4', 'L3', 'R5', 'R4', 'R2', 'L4', 'R2', 'R3', 'L3', 'R4', 'L1', 'L3', 'R2', 'R1', 'R5', 'L4',
'L5', 'L5', 'R4', 'L5', 'L2', 'L4', 'R4', 'R4', 'R1', 'L3', 'L2', 'L4', 'R3']

const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]

const right = curr => (curr + 1) > 3 ? 0 : (curr + 1)
const left = curr => (curr - 1) < 0 ? 3 : (curr - 1)

const traverse = data.reduce((a, b) => {

    const dir = b[0] === 'R' ? right(a.dir) : left(a.dir)
    const dist = b.slice(1)

    const x = a.pos[0] + dist * directions[dir][0]
    const y = a.pos[1] + dist * directions[dir][1]

    return {pos: [x, y], dir}
})

const result = Math.abs(result.pos[0]) + Math.abs(result.pos[1])

console.log(result)
