const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }


//below is try catch type asynchandler and above is promise type asynchandler

// const asyncHandler = () => {}
// const asyncHandler = (func) => {() => {} }
// const asyncHandler = (func) => () => {} 
// const asyncHandler = (func) => async () => {}

 //asynchandler is a higher order function above is stepwise prcs to understand and below is actual one step code

 //4 param hote ai express me req, res, err, next

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }