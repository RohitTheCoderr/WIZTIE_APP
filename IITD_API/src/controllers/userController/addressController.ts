import { RequestHandler, NextFunction, Request, Response } from "express";
import { addressValidator, addressWhileUpdateValidator } from "@src/validation_schema";
import { logger } from "@src/logger";
import { addressModel } from "@src/models"
import { StatusCodes } from "http-status-codes";

////////////////
const addAddressController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.info("address saving..", { __filename })
        const userId = (req as any).userId;
        const { PhoneNumber,
            aprtmentOrFloor,
            fullName,
            streetName,
            townOrCity } = await addressValidator.validateAsync(req.body)


        const addresses = await addressModel.findOne({ userId })
        if (!addresses?.address) {
            await addressModel.create({
                userId, address: [{
                    PhoneNumber,
                    aprtmentOrFloor,
                    fullName,
                    streetName,
                    townOrCity
                }]
            })
            return res.status(StatusCodes.OK).json({ success: true, message: "User address created.   " })
        }
        else {
            await addressModel.findOneAndUpdate({ userId }, {
                $push: {
                    address: {
                        PhoneNumber,
                        aprtmentOrFloor,
                        fullName,
                        streetName,
                        townOrCity,
                    }
                }
            })
            return res.status(StatusCodes.OK).json({ success: true, message: "User address added.   " })
        }

    } catch (error) {
        logger.error(`exception occurred at addAddressController : ${JSON.stringify(error)}`, { __filename });
        next(error);
    }
}


////////////////
const updateAddressController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.info("address updating.", { __filename })
        const userId = (req as any).userId;
        const { PhoneNumber,
            aprtmentOrFloor,
            fullName,
            streetName,
            townOrCity,
            addressId
        } = await addressWhileUpdateValidator.validateAsync(req.body)

        await addressModel.findOneAndUpdate({ userId, "address._id": addressId }, {
            $set: {
                "address.$.PhoneNumber": PhoneNumber,
                "address.$.aprtmentOrFloor": aprtmentOrFloor,
                "address.$.fullName": fullName,
                "address.$.streetName": streetName,
                "address.$.townOrCity": townOrCity,
            }
        })
        return res.status(StatusCodes.OK).json({ success: true, message: "User address updated.   " })
    } catch (error) {
        logger.error(`exception occurred at updateAddressController : ${JSON.stringify(error)}`, { __filename });
        next(error);
    }
}




////////////////
const getAddressesController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.info("getting address ..", { __filename })
        const userId = (req as any).userId;
        const addresses = await addressModel.findOne({ userId })
        if (!addresses?.address) {
            return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "addresses not found" })
        }

        return res.status(StatusCodes.OK).json({ success: true, message: "addresses fetched...", data: { addresses: addresses?.address } })
    } catch (error) {
        logger.error(`exception occurred at getAddressesController : ${JSON.stringify(error)}`, { __filename });
        next(error);
    }
}

const deleteAddressesController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.info("getting address ..", { __filename })
        const userId = (req as any).userId;
        const { addressId } = req.body
        if (!addressId) {
            return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "please provide address Id" })
        }

        const { modifiedCount } = await addressModel.updateOne({ userId }, {
            $pull: { address: { _id: addressId } }
        })

        if (modifiedCount == 0) {
            return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "something went wrong" })
        }
        return res.status(StatusCodes.OK).json({ success: true, message: "address deleted.." })
    } catch (error) {
        logger.error(`exception occurred at getAddressesController : ${JSON.stringify(error)}`, { __filename });
        next(error);
    }
}


export { addAddressController, updateAddressController, getAddressesController, deleteAddressesController }