export class User {

    constructor(
        public name: string = '',
        public coins: number = 100,
        public moves: object [] = []) {
    }

    // setId?(id: string = 'r101') {
    //     // Implement your own set Id
    //     this._id = id
    // }
}
