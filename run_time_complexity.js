

//                                                      Big O() types                  Big O() = run time complexity 



//  O(1)   = instant. No metter how big the input data is algorithim will run instantly. 
            // function j (){
            //     let v = [1,2,3,4,5]
            //     console.log(v[0])
            // }
// this algorithim's speed is  =      O(1). 
            // function j (){
            //     let v = [1,2,3,4,5]
            //     console.log(v[0])
            //     console.log(v[0])
            // }
// this algorithim's speed is  =      O(1 + 1) = O(2) =  O(1), but we can simplify this, because even if array is 1 mil the algorythm will still be constant and that is all we care about.  


//  O(n)   =  linear, the run time of this algorithm increases lineary in direct proportion to the size of input. In this case the bigger the array is the slower this algorithm will be, because it needs to go thru each item of the array.
        // function j (){
        //     let v = [1,2,3,4,5]
        //     for (key of v){
        //         console.log(key)
        //     }
        // }

//   So    this    Algorithm speed is   =   O(n).                Where   n   =  the size of the input.

        // function j (){
        //     console.log("Julia")
        //     let v = [1,2,3,4,5]
        //     for (key of v){
        //         console.log(key)
        //     }
        //     console.log("VLad")
        // }

//   So    this    Algorithm speed is   =   O(n + 1 + 1) =  O(2 + n)  =  O(n).   Where   n   =  the size of the input. Because if the n is 1 mil +2 operations woun't have a significant impact. 

        // function j (){
        //     let v = [1,2,3,4,5]
        //     for (key of v){
        //         console.log(key)
        //     }
        //     for (key of v){
        //         console.log(key)
        //     }
        // }

//   So    this    Algorithm speed is   =   O(n + n) =  O(2n)  =  O(n).   Where   n   =  the size of the input. Because if the n is 1 mil, 2n is 2 mil = which is still a linear growth.

        // function j (){
        //     let v = [1,2,3,4,5]
        //     for (key of v){
        //         console.log(key)
        //     }
        //     let k = ["a", "b", "c","d","e"]
        //     for (key of k){
        //         console.log(key)
        //     }
        // }

//  So    this    Algorithm speed is   =   O(n + m) = O(n).   Where   n   =  the size of the input. Because if the n is 1 mil, m is 1 mil = still a linear growth.



    //    This Algorithm is Quadratic.  Which is     =   O (n * n)

        // function j (){
        //     let v = [[1,2,9, 1, 2, 3], [3,5], [6, 7, 8, 1, 2, 3]]
        //     for (key of v){
        //         for (let i = 0; i < key.length; i++){
        //             console.log(key[i])
        //         }
        //     }
        // }

// This algorithm run complexity is  =  O(n ↥ 2) = O(n * n)  . Where  n   =  the size of the input.

        // function j (){
        //     let a = [1,2,3,4,5]
        //     for (key of a){
        //         console.log(key)
        //     }
        //     let v = [[1,2,9, 1, 2, 3], [3,5], [6, 7, 8, 1, 2, 3]]
        //     for (key of v){
        //         for (let i = 0; i < key.length; i++){
        //             console.log(key[i])
        //         }
        //     }
        // }

//   This algorithm run complexity is  =  O(n + n ↥ 2) = O(n * n).  Because it is still quadratic, because n * n always increases faster then  n.

        //     function j(){
        //     let v = [[1,2,9, 1, 2, 3], [[3,5,4],5], [6, 7, 8, 1, 2, 3]]
        //     for (key of v){
        //         for (let i = 0; i < key.length; i++){
        //             for (let a = 0; a < key[i].length; a++){
        //                 console.log(key[i][a])
        //             }
        //         }
        //     }
        // }

//   This algorithm run complexity is  =  O(n * n * n) = O(n ↥ 3).  Because it is now double deep level.



//   This algorithm run time complexity is   =   O(log n)  =    which is logarithmic.  This metod always divide the given array in middle. If the number we are looking for is greater the the one in middle, then we devide once again the right part, if it is lower = the left part. This process continues untill we find the needed number. There is only one faster run time complexity which is = instant = O(1).



//   This algorithm run time complexity is   =   O(2 ↥ n)  =    which is exponential (oposite to logarithmic). There is only one slower run time complexity which is = quadratic = O(n * n)  (remeber that qubic is even slower O(n * n *n) and so on).  



