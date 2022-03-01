class HashTable {
    constructor() {
        this.array = []
    }
    get(key) {
        let array = [{ fruits1: "Strawberry" }, { fruits2: "Banana" }, {}, { fruits3: "Mango" }, {}]

        // loop for iterate all array 
        //    for(key in array ){

        //    }
        for (let i = 0; i < array.length; i++) {

            let object = key[i]

            if (i === key[i]) {
                console.log(object)
                return object

            } else {

                return null;
            }


        }




    }
}


