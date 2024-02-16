import express from 'express'
import dotenv from 'dotenv'
import bodyParser  from 'body-parser'
import userRouter from './src/routes/UserRouter.js'
import friendRouter from './src/routes/friendRouter.js'
import groupRouter from './src/routes/groupRouter.js'
import postRouter from './src/routes/postRouter.js'
import commentRouter from './src/routes/commentRouter.js'
import photoRouter from './src/routes/photoRouter.js'
import eventRouter from './src/routes/eventsRouter.js'
import messageRouter from './src/routes/messageRouter.js'
import eventAttendeeRouter from './src/routes/eventAttendeeRouter.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 4000


app.use('/api',userRouter)
app.use('/api',friendRouter)
app.use('/api',groupRouter)
app.use('/api',postRouter)
app.use('/api',commentRouter)
app.use('/api',photoRouter)
app.use('/api',eventRouter)
app.use('/api',messageRouter)
app.use('/api',eventAttendeeRouter)


app.listen(port, () => {
   console.log(`Server up and running on port: ${port}`);
})



