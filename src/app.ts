import express from "express"
import dotenv from "dotenv"
import AppController from "./initiators/appContoller"

// CONFIGURE ENVIRONMENT VARIABLES
dotenv.config()


// Start Application Server
const app = express()
const PORT = process.env.PORT as string
const appController = new AppController(app, PORT)
appController.startApp()