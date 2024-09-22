import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
//after importing cors and cookieParser we need to configure it, they are configured after app is made in express

const app = express()
//use method is used for middleware and configurations
//simply app.use(cors({origin: process.env.CORS_ORIGIN})) itne se kam chal jata hai cors_origin par apna fe ka url dena hota hai so that onl our fe can access
app.use(cors({
    //explore more about the options of cors just like the origin and credential here
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//body parser is used to parse the body of the request and beloww here are the configurations for body parser which is nowadays inbuilt in express
app.use(express.json({limit: "16kb"})) //limit of json data is 16 kb
app.use(express.urlencoded({extended: true, limit: "16kb"})) //limit of url encoded data is 16 kb and url encoded data is form data in the form of key value pair, extended is used to parse nested objects i.e. more specified data and limit is used to limit the size of the data
app.use(express.static("public"))//to serve static files like pdfs and images which are public assets
app.use(cookieParser())//this configuration is used to access and set the cookies in the browser of user i.e. performing crud operations by the server


//routes import
import userRouter from './routes/user.routes.js'
import healthcheckRouter from "./routes/healthcheck.routes.js"
import tweetRouter from "./routes/tweet.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import videoRouter from "./routes/video.routes.js"
import commentRouter from "./routes/comment.routes.js"
import likeRouter from "./routes/like.routes.js"
import playlistRouter from "./routes/playlist.routes.js"
import dashboardRouter from "./routes/dashboard.routes.js"

//routes declaration
app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/tweets", tweetRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/likes", likeRouter)
app.use("/api/v1/playlist", playlistRouter)
app.use("/api/v1/dashboard", dashboardRouter)

// http://localhost:8000/api/v1/users/register

export { app }