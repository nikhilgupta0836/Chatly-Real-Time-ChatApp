import express from "express"
import { login, logOut, signUp } from "../controllers/auth.controllers.js"

const authRouter=express.Router() // express.Router() creates a new router object to handle routes related to authentication.

authRouter.post("/signup",signUp)
authRouter.post("/login",login)
authRouter.get("/logout",logOut)

export default authRouter