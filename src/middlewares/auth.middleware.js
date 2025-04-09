import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import {User} from '../models/user.model.js';

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const verifyJWT= asyncHandler(async(req,res,next)=>{
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")

        console.log("Token received:", token);
        console.log("Type of token:", typeof token);    
    
        if(!token){
            throw new ApiError(401,"Unauthorized")
        }
    
        const decodeToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET )
    
        const user=await User.findById(decodeToken?._id).select("-password -refreshToken")
    
        if (!user) {
            throw new ApiError(401, "invalid Access token")
        }
    
        req.user=user;
        next();

    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Access Token")
    }
})