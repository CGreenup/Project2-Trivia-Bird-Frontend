export class question {
    constructor(
        public category:string, 
        public difficulty:string, 
        public question: string, 
        public correctAnswer: string,
        public answers: Array<string>)
        {}
}