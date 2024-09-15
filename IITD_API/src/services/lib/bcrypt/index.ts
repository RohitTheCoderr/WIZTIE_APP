import bcrypt from "bcrypt"
import { logger } from "@src/logger";

async function generateHashedPassword(plainPassword){
    const saltRounds = 10;
    try {
        const key = process.env.PASSWORD_SECRET_KEY
        if (!key) logger.info("PASSWORD_SECRET_KEY not found in env")

        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPassword  = await bcrypt.hash(plainPassword+key,salt)
        return hashedPassword
        
    } catch (error) {
        logger.error(`error occurred at ${error}`, { __filename })
    }

}
async function verifyHashedPassword(plainPassword,hashedPassword) {
    try {
        const key = process.env.PASSWORD_SECRET_KEY
        if (!key) logger.info("PASSWORD_SECRET_KEY not found in env")
            
        const bool = await bcrypt.compare(plainPassword + key, hashedPassword)
        return bool
    } catch (error) {
        logger.error(`error occurred at ${error}`, { __filename })
    }

}

export { generateHashedPassword, verifyHashedPassword }