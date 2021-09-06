export default class Participant {
    id
    name
    image
    isVideoOn
    constructor(id: number, name: string, image: string, isVideoOn: boolean) {
        this.id = id
        this.name = name
        this.image = image
        this.isVideoOn = isVideoOn
    }
}

