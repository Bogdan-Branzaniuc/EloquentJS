const generateMesh = (gridNum) => {
    let meshLine = ''
    let mesh = ''
    let counter = 0
    for (i = 0; i < gridNum; i++) {
        meshLine += i % 2 === 0 ? ' ' : '#'
    }
    const meshLineInverted = meshLine.split("").reverse().join("")

    for (i = 1; i <= gridNum; i++) {
        counter % 2 === 0 ? mesh += meshLine : mesh += meshLineInverted
        mesh += "\n"
        counter += 1
    }
    console.log(mesh)
}
generateMesh(10)

